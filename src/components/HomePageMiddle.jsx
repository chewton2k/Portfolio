import React, { useState, useEffect, useRef } from 'react';
import SwitchDescription from './SwitchDescription';

const HomePageMiddle = () => {
  const NUM_BALLS = 3;
  const BALL_SIZE = 60;
  const BALL_RADIUS = BALL_SIZE / 2;
  
  const [balls, setBalls] = useState([]);
  const [isDragging, setIsDragging] = useState(false);
  const [draggedBallIndex, setDraggedBallIndex] = useState(null);
  const [offset, setOffset] = useState({ x: 0, y: 0 });
  const [textObstacles, setTextObstacles] = useState([]);
  
  const containerRef = useRef(null);
  const ballRefs = useRef([]);
  const headingRef = useRef(null);
  const switchDescRef = useRef(null);
  const lastTimeRef = useRef(performance.now());
  const positionHistoryRef = useRef([]);
  const requestRef = useRef(null);

  useEffect(() => {
    if (containerRef.current && balls.length === 0) {
      const { width, height } = containerRef.current.getBoundingClientRect();
      const initialBalls = Array.from({ length: NUM_BALLS }, (_, index) => ({
        id: index,
        position: { 
          x: Math.random() * (width - BALL_SIZE),
          y: Math.random() * (height / 2)
        },
        velocity: { 
          x: Math.random() * 2 - 1, 
          y: 0 
        },
        lastPosition: { 
          x: 0, 
          y: 0 
        }
      }));
      
      setBalls(initialBalls);
      ballRefs.current = initialBalls.map(() => React.createRef());
    }
  }, [balls.length]);

  useEffect(() => {
    const detectTextElements = () => {
      if (!containerRef.current || !headingRef.current || !switchDescRef.current) return;
      
      const containerRect = containerRef.current.getBoundingClientRect();
      
      const headingRect = headingRef.current.getBoundingClientRect();
      const headingObstacle = {
        left: headingRect.left - containerRect.left,
        top: headingRect.top - containerRect.top,
        right: headingRect.right - containerRect.left,
        bottom: headingRect.bottom - containerRect.top,
        width: headingRect.width,
        height: headingRect.height,
        type: 'heading'
      };
      
      const switchRect = switchDescRef.current.getBoundingClientRect();
      const switchObstacle = {
        left: switchRect.left - containerRect.left,
        top: switchRect.top - containerRect.top,
        right: switchRect.right - containerRect.left,
        bottom: switchRect.bottom - containerRect.top,
        width: switchRect.width,
        height: switchRect.height,
        type: 'switch'
      };
      
      setTextObstacles([headingObstacle, switchObstacle]);
    };
    
    detectTextElements();
    window.addEventListener('resize', detectTextElements);
    
    const timeoutId = setTimeout(detectTextElements, 500);
    
    return () => {
      window.removeEventListener('resize', detectTextElements);
      clearTimeout(timeoutId);
    };
  }, []); 
  useEffect(() => {
    const handleVisibilityChange = () => {
      if (document.visibilityState === 'hidden' && isDragging) {
        handleEndDrag();
      }
    };

    const handleWindowBlur = () => {
      if (isDragging) {
        handleEndDrag();
      }
    };

    document.addEventListener('visibilitychange', handleVisibilityChange);
    window.addEventListener('blur', handleWindowBlur);

    return () => {
      document.removeEventListener('visibilitychange', handleVisibilityChange);
      window.removeEventListener('blur', handleWindowBlur);
    };
  }, [isDragging]);

  const handleStartDrag = (clientX, clientY, index) => {
    if (!ballRefs.current[index]?.current) return;
    
    const ballRect = ballRefs.current[index].current.getBoundingClientRect();
    setOffset({
      x: clientX - ballRect.left,
      y: clientY - ballRect.top,
    });
    
    setDraggedBallIndex(index);
    setIsDragging(true);
    positionHistoryRef.current = [{
      x: clientX,
      y: clientY,
      time: performance.now()
    }];
    
    setBalls(prev => prev.map((ball, i) => 
      i === index ? { ...ball, velocity: { x: 0, y: 0 } } : ball
    ));
  };

  const handleMouseDown = (e, index) => {
    handleStartDrag(e.clientX, e.clientY, index);
    e.preventDefault();
  };

  const handleTouchStart = (e, index) => {
    if (e.touches[0]) handleStartDrag(e.touches[0].clientX, e.touches[0].clientY, index);
    e.preventDefault();
  };

  const updateBallPosition = (clientX, clientY) => {
    if (!isDragging || draggedBallIndex === null || !containerRef.current) return;

    const now = performance.now();
    lastTimeRef.current = now;
    const { left, top, width, height } = containerRef.current.getBoundingClientRect();

    const newX = Math.max(0, Math.min(width - BALL_SIZE, clientX - left - offset.x));
    const newY = Math.max(0, Math.min(height - BALL_SIZE, clientY - top - offset.y));

    positionHistoryRef.current.push({ x: clientX, y: clientY, time: now });
    if (positionHistoryRef.current.length > 10) positionHistoryRef.current.shift();

    setBalls(prev => prev.map((ball, i) => 
      i === draggedBallIndex ? { 
        ...ball, 
        position: { x: newX, y: newY },
        lastPosition: { x: clientX, y: clientY }
      } : ball
    ));
  };

  const handleEndDrag = () => {
    if (!isDragging || draggedBallIndex === null) return;

    const history = positionHistoryRef.current;
    if (history.length >= 2) {
      const recent = history.slice(-5);
      if (recent.length >= 2) {
        const newest = recent[recent.length - 1];
        const oldest = recent[0];
        const timeDiff = newest.time - oldest.time;

        if (timeDiff > 0) {
          const velocityScale = 15;
          const vx = ((newest.x - oldest.x) / timeDiff) * velocityScale;
          const vy = ((newest.y - oldest.y) / timeDiff) * velocityScale;

          setBalls(prev => prev.map((ball, i) => 
            i === draggedBallIndex ? { ...ball, velocity: { x: vx, y: vy } } : ball
          ));
        }
      }
    }

    setIsDragging(false);
    setDraggedBallIndex(null);
    positionHistoryRef.current = [];
  };

  const checkBallCollisions = (balls) => {
    const newBalls = [...balls];
    
    for (let i = 0; i < newBalls.length; i++) {
      for (let j = i + 1; j < newBalls.length; j++) {
        const ball1 = newBalls[i];
        const ball2 = newBalls[j];
        
        const center1 = {
          x: ball1.position.x + BALL_RADIUS,
          y: ball1.position.y + BALL_RADIUS
        };
        const center2 = {
          x: ball2.position.x + BALL_RADIUS,
          y: ball2.position.y + BALL_RADIUS
        };
        
        const dx = center2.x - center1.x;
        const dy = center2.y - center1.y;
        const distance = Math.sqrt(dx * dx + dy * dy);
        
        if (distance < BALL_SIZE) {
          const nx = dx / distance;
          const ny = dy / distance;
          const vx = ball2.velocity.x - ball1.velocity.x;
          const vy = ball2.velocity.y - ball1.velocity.y;
          const velocityAlongNormal = vx * nx + vy * ny;
          
          if (velocityAlongNormal > 0) continue;
          
          const restitution = 0.7;
          let impulseScalar = -(1 + restitution) * velocityAlongNormal / 2;

          const impulseX = impulseScalar * nx;
          const impulseY = impulseScalar * ny;

          newBalls[i].velocity.x -= impulseX;
          newBalls[i].velocity.y -= impulseY;
          newBalls[j].velocity.x += impulseX;
          newBalls[j].velocity.y += impulseY;

          const overlap = (BALL_SIZE - distance) - 1;
          const correctionX = nx * overlap * 0.5;
          const correctionY = ny * overlap * 0.5;

          newBalls[i].position.x -= correctionX;
          newBalls[i].position.y -= correctionY;
          newBalls[j].position.x += correctionX;
          newBalls[j].position.y += correctionY;
        }
      }
    }
    
    return newBalls;
  };

  const checkTextCollisions = (balls) => {
    if (!textObstacles.length) return balls;
    
    return balls.map(ball => {
      if (isDragging && ball.id === draggedBallIndex) {
        return ball;
      }
      
      const ballCenterX = ball.position.x + BALL_RADIUS;
      const ballCenterY = ball.position.y + BALL_RADIUS;
      
      let newBall = { ...ball };
      for (const obstacle of textObstacles) {
        const closestX = Math.max(obstacle.left, Math.min(ballCenterX, obstacle.right));
        const closestY = Math.max(obstacle.top, Math.min(ballCenterY, obstacle.bottom));
        
        const distanceX = ballCenterX - closestX;
        const distanceY = ballCenterY - closestY;
        const distance = Math.sqrt(distanceX * distanceX + distanceY * distanceY);
        
        if (distance < BALL_RADIUS) {
          const nx = distanceX / distance;
          const ny = distanceY / distance;
          
          const penetration = BALL_RADIUS - distance;
          
          newBall.position.x += nx * penetration;
          newBall.position.y += ny * penetration;
          
          const dot = newBall.velocity.x * nx + newBall.velocity.y * ny;
          
          const restitution = 0.7;
          newBall.velocity.x = newBall.velocity.x - (1 + restitution) * dot * nx;
          newBall.velocity.y = newBall.velocity.y - (1 + restitution) * dot * ny;
        }
      }
      
      return newBall;
    });
  };

  useEffect(() => {
    const applyPhysics = (time) => {
      const deltaTime = time - lastTimeRef.current;
      lastTimeRef.current = time;
      const timeScale = deltaTime / 16;

      setBalls(prevBalls => {
        let newBalls = prevBalls.map((ball, index) => {
          if (isDragging && index === draggedBallIndex) return ball;

          let newVelX = ball.velocity.x * 0.98 * 0.995;
          let newVelY = ball.velocity.y + 0.4 * timeScale;
          newVelY *= 0.995;
          
          let newX = ball.position.x + newVelX * timeScale;
          let newY = ball.position.y + newVelY * timeScale;
          
          if (!containerRef.current) return ball;
          const container = containerRef.current.getBoundingClientRect();
          
          if (newX < 0) {
            newX = 0;
            newVelX = -newVelX * 0.7;
          } else if (newX > container.width - BALL_SIZE) {
            newX = container.width - BALL_SIZE;
            newVelX = -newVelX * 0.7;
          }

          if (newY > container.height - BALL_SIZE) {
            newY = container.height - BALL_SIZE;
            newVelY = Math.abs(newVelY) > 1 ? -newVelY * 0.7 : 0;
            newVelX *= 0.9;
          } else if (newY < 0) {
            newY = 0;
            newVelY = -newVelY * 0.7;
          }
          
          return {
            ...ball,
            position: { x: newX, y: newY },
            velocity: { x: newVelX, y: newVelY }
          };
        });
        
        newBalls = checkBallCollisions(newBalls);
        newBalls = checkTextCollisions(newBalls);
        
        return newBalls;
      });

      requestRef.current = requestAnimationFrame(applyPhysics);
    };

    const handleMouseMove = (e) => updateBallPosition(e.clientX, e.clientY);
    const handleTouchMove = (e) => {
      if (e.touches[0]) updateBallPosition(e.touches[0].clientX, e.touches[0].clientY);
      e.preventDefault();
    };

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('touchmove', handleTouchMove, { passive: false });
    window.addEventListener('mouseup', handleEndDrag);
    window.addEventListener('touchend', handleEndDrag);

    lastTimeRef.current = performance.now();
    requestRef.current = requestAnimationFrame(applyPhysics);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('touchmove', handleTouchMove);
      window.removeEventListener('mouseup', handleEndDrag);
      window.removeEventListener('touchend', handleEndDrag);
      if (requestRef.current) cancelAnimationFrame(requestRef.current);
    };
  }, [isDragging, draggedBallIndex, offset, textObstacles]);

  return (
    <div 
  className="relative flex flex-col justify-center w-full min-h-[50vh] bg-cover bg-center"
  ref={containerRef}
>
      {balls.map((ball, index) => (
        <div
          key={ball.id}
          ref={ballRefs.current[index]}
          className="absolute cursor-grab active:cursor-grabbing rounded-full shadow-lg"
          style={{
            width: BALL_SIZE,
            height: BALL_SIZE,
            left: ball.position.x,
            top: ball.position.y,
            zIndex: isDragging && draggedBallIndex === index ? 10 : 1
          }}
          onMouseDown={(e) => handleMouseDown(e, index)}
          onTouchStart={(e) => handleTouchStart(e, index)}
        >
          <img 
            src="/tennisball.avif" 
            alt="ball" 
            className="w-full h-full object-cover rounded-full select-none"
            draggable="false"
          />
        </div>
      ))}
      
      <div className="container mx-auto px-4 h-full justify-cente flex flex-col items-center z-10 relative pointer-events-none">
        <h1 
          ref={headingRef}
          className="text-4xl md:text-6xl font-mono font-medium mb-6 text-center text-white select-none"
        >
          Hello, I'm Charlton Shih
        </h1>
        <div ref={switchDescRef} className="select-none"> 
          <SwitchDescription/> 
        </div>
      </div>
    </div>
  );
};

export default HomePageMiddle;