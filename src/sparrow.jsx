import React, { useEffect, useRef } from 'react';
import { useGLTF, useAnimations } from '@react-three/drei';
import { useFrame } from '@react-three/fiber';

const SparrowModel = () => {
  const { scene, animations } = useGLTF('/models/sparrow.glb');
  const { actions } = useAnimations(animations, scene);
  const currentAction = useRef(null);
  const isSpinning = useRef(false);
  const isJumping = useRef(false);

  useEffect(() => {
    if (actions && actions['Idle_A']) {
      const idleAction = actions['Idle_A'];
      idleAction.play();
      currentAction.current = idleAction;
    }

    const handleScroll = () => {
      if (!isJumping.current && actions && actions['Jump']) {
        if (currentAction.current) {
          currentAction.current.stop();
        }
        const jumpAction = actions['Jump'];
        jumpAction.play();
        currentAction.current = jumpAction;
        isJumping.current = true;

        setTimeout(() => {
          jumpAction.stop();
          if (actions['Idle_A']) {
            const idleAction = actions['Idle_A'];
            idleAction.play();
            currentAction.current = idleAction;
          }
          isJumping.current = false;
        }, 3000); // 3 seconds
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [actions]);

  const handleClick = () => {
    if (actions && actions['Spin'] && !isSpinning.current) {
      if (currentAction.current) {
        currentAction.current.stop();
      }
      const spinAction = actions['Spin'];
      spinAction.play();
      currentAction.current = spinAction;
      isSpinning.current = true;

      setTimeout(() => {
        spinAction.stop();
        if (actions['Idle_A']) {
          const idleAction = actions['Idle_A'];
          idleAction.play();
          currentAction.current = idleAction;
        }
        isSpinning.current = false;
      }, 2000); // 2 seconds
    }
  };

  useFrame(() => {
    if (isSpinning.current || isJumping.current) return;
    if (actions && actions['Idle_A'] && currentAction.current !== actions['Idle_A']) {
      if (currentAction.current) {
        currentAction.current.stop();
      }
      const idleAction = actions['Idle_A'];
      idleAction.play();
      currentAction.current = idleAction;
    }
  });

  return (
    <primitive
      object={scene}
      onClick={handleClick}
      position={[0, -2, 0]} // Adjust this to position the model as needed
      scale={[6, 6, 6]} // Adjust this to scale the model as needed
      rotation = {[0,-1.3,-0.3]}
    />
  );
};

export default SparrowModel;
