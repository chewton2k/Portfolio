import React, { useState, useEffect, useRef } from 'react';

const HomePageMiddle = () => {
  const NUM_BALLS = 30;
  const BALL_SIZE = 80;
  const BALL_RADIUS = BALL_SIZE / 2;
  
  const [balls, setBalls] = useState([]);
  const [isDragging, setIsDragging] = useState(false);
  const [draggedBallIndex, setDraggedBallIndex] = useState(null);
  const [offset, setOffset] = useState({ x: 0, y: 0 });
  const containerRef = useRef(null);
  const ballRefs = useRef([]);
  const lastTimeRef = useRef(performance.now());
  const positionHistoryRef = useRef([]);
  const requestRef = useRef(null);

 
  useEffect(() => {
    if (containerRef.current) {
      const { width, height } = containerRef.current.getBoundingClientRect();
      
   
      const initialBalls = Array.from({ length: NUM_BALLS }, (_, index) => {
        const x = Math.random() * (width - BALL_SIZE);
        const y = Math.random() * (height / 2); 
        
        return {
          id: index,
          position: { x, y },
          velocity: { x: Math.random() * 2 - 1, y: 0 }, 
          lastPosition: { x, y }
        };
      });
      
      setBalls(initialBalls);
      ballRefs.current = initialBalls.map(() => React.createRef());
    }
  }, []);

  const handleMouseDown = (e, index) => {
    if (ballRefs.current[index]?.current) {
      const ballRect = ballRefs.current[index].current.getBoundingClientRect();
      setOffset({
        x: e.clientX - ballRect.left,
        y: e.clientY - ballRect.top,
      });
      
      setDraggedBallIndex(index);
      setIsDragging(true);
      
      // Reset position history for this ball
      positionHistoryRef.current = [];
      positionHistoryRef.current.push({
        x: e.clientX,
        y: e.clientY,
        time: performance.now()
      });
      
      // Set velocity to zero for the dragged ball
      setBalls(prev => {
        const newBalls = [...prev];
        newBalls[index] = {
          ...newBalls[index],
          velocity: { x: 0, y: 0 }
        };
        return newBalls;
      });
    }
    e.preventDefault();
  };

  const handleTouchStart = (e, index) => {
    if (ballRefs.current[index]?.current && e.touches[0]) {
      const ballRect = ballRefs.current[index].current.getBoundingClientRect();
      const touch = e.touches[0];
      setOffset({
        x: touch.clientX - ballRect.left,
        y: touch.clientY - ballRect.top,
      });
      
      setDraggedBallIndex(index);
      setIsDragging(true);
      
   
      positionHistoryRef.current = [];
      positionHistoryRef.current.push({
        x: touch.clientX,
        y: touch.clientY,
        time: performance.now()
      });
      
  
      setBalls(prev => {
        const newBalls = [...prev];
        newBalls[index] = {
          ...newBalls[index],
          velocity: { x: 0, y: 0 }
        };
        return newBalls;
      });
    }
    e.preventDefault();
  };

  useEffect(() => {
    const trackMouseMovement = (clientX, clientY) => {
      if (!isDragging || draggedBallIndex === null || !containerRef.current) return;

      const now = performance.now();
      lastTimeRef.current = now;

      const { left, top, width, height } = containerRef.current.getBoundingClientRect();

      let newX = clientX - left - offset.x;
      let newY = clientY - top - offset.y;

 
      newX = Math.max(0, Math.min(width - BALL_SIZE, newX));
      newY = Math.max(0, Math.min(height - BALL_SIZE, newY));

      positionHistoryRef.current.push({
        x: clientX,
        y: clientY,
        time: now,
      });

  
      if (positionHistoryRef.current.length > 10) {
        positionHistoryRef.current.shift();
      }

      setBalls(prev => {
        const newBalls = [...prev];
        newBalls[draggedBallIndex] = {
          ...newBalls[draggedBallIndex],
          position: { x: newX, y: newY },
          lastPosition: { x: clientX, y: clientY }
        };
        return newBalls;
      });
    };

    const handleMouseMove = (e) => {
      trackMouseMovement(e.clientX, e.clientY);
    };

    const handleTouchMove = (e) => {
      if (!e.touches[0]) return;
      trackMouseMovement(e.touches[0].clientX, e.touches[0].clientY);
      e.preventDefault();
    };

    const handleEnd = () => {
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

            setBalls(prev => {
              const newBalls = [...prev];
              newBalls[draggedBallIndex] = {
                ...newBalls[draggedBallIndex],
                velocity: { x: vx, y: vy }
              };
              return newBalls;
            });
          }
        }
      }

      setIsDragging(false);
      setDraggedBallIndex(null);
      positionHistoryRef.current = [];
    };

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('touchmove', handleTouchMove, { passive: false });
    window.addEventListener('mouseup', handleEnd);
    window.addEventListener('touchend', handleEnd);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('touchmove', handleTouchMove);
      window.removeEventListener('mouseup', handleEnd);
      window.removeEventListener('touchend', handleEnd);
    };
  }, [isDragging, draggedBallIndex, offset]);

  const checkCollisions = (balls) => {
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
          
          let impulseScalar = -(1 + restitution) * velocityAlongNormal;
          impulseScalar /= 2; 

          const impulseX = impulseScalar * nx;
          const impulseY = impulseScalar * ny;

          newBalls[i].velocity.x -= impulseX;
          newBalls[i].velocity.y -= impulseY;
          newBalls[j].velocity.x += impulseX;
          newBalls[j].velocity.y += impulseY;

          const overlap = (BALL_SIZE - distance)-1;
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

  useEffect(() => {
    const gravity = 0.4;
    const friction = 0.98;
    const airResistance = 0.995;
    const bounce = 0.7;

    const animate = (time) => {
      const deltaTime = time - lastTimeRef.current;
      lastTimeRef.current = time;
      const timeScale = deltaTime / 16;

      setBalls(prevBalls => {
        let newBalls = prevBalls.map((ball, index) => {
          if (isDragging && index === draggedBallIndex) {
            return ball;
          }

          let newVelX = ball.velocity.x * friction * airResistance;
          let newVelY = ball.velocity.y + gravity * timeScale;
          newVelY *= airResistance;
          
          let newX = ball.position.x + newVelX * timeScale;
          let newY = ball.position.y + newVelY * timeScale;
          
          if (!containerRef.current) return ball;
          const container = containerRef.current.getBoundingClientRect();
          
          if (newX < 0) {
            newX = 0;
            newVelX = -newVelX * bounce;
          } else if (newX > container.width - BALL_SIZE) {
            newX = container.width - BALL_SIZE;
            newVelX = -newVelX * bounce;
          }

          if (newY > container.height - BALL_SIZE) {
            newY = container.height - BALL_SIZE;
            if (Math.abs(newVelY) > 1) {
              newVelY = -newVelY * bounce;
            } else {
              newVelY = 0;
              newVelX = newVelX * 0.9; // More friction on ground
            }
          } else if (newY < 0) {
            newY = 0;
            newVelY = -newVelY * bounce;
          }
          
          return {
            ...ball,
            position: { x: newX, y: newY },
            velocity: { x: newVelX, y: newVelY }
          };
        });
        
        newBalls = checkCollisions(newBalls);
        
        return newBalls;
      });

      requestRef.current = requestAnimationFrame(animate);
    };

    lastTimeRef.current = performance.now();
    requestRef.current = requestAnimationFrame(animate);

    return () => {
      if (requestRef.current) {
        cancelAnimationFrame(requestRef.current);
      }
    };
  }, [isDragging, draggedBallIndex]);

  return (
    <div className="relative w-full h-screen bg-blue-50" ref={containerRef}>
      {balls.map((ball, index) => (
        <div
          key={ball.id}
          ref={ballRefs.current[index]}
          className="absolute cursor-grab active:cursor-grabbing bg-white rounded-full shadow-lg flex items-center justify-center"
          style={{
            width: `${BALL_SIZE}px`,
            height: `${BALL_SIZE}px`,
            left: `${ball.position.x}px`,
            top: `${ball.position.y}px`,
            transform: 'translate(0, 0)',
            zIndex: isDragging && draggedBallIndex === index ? 10 : 1
          }}
          onMouseDown={(e) => handleMouseDown(e, index)}
          onTouchStart={(e) => handleTouchStart(e, index)}
        >
          <img src="/tennisball.avif" alt="ball" className="w-full h-full object-cover rounded-full select-none"/>
        </div>
      ))}
      
      {/* Portfolio content */}
      <div className="container mx-auto px-4 h-full flex flex-col items-center justify-center text-white z-10 relative pointer-events-none">
        <h1 className="text-4xl md:text-6xl font-bold mb-6 text-center text-black">
          Hello, I'm Charlton Shih
        </h1>
      </div>
    </div>
  );
};

export default HomePageMiddle;