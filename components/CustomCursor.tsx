import React, { useEffect, useRef, useState } from 'react';

const CustomCursor: React.FC = () => {
    const glowRef = useRef<HTMLDivElement>(null);
    const trailRefs = useRef<HTMLDivElement[]>([]);
    const mousePos = useRef({ x: -200, y: -200 });
    const positions = useRef<{ x: number; y: number }[]>([]);
    const [isVisible, setIsVisible] = useState(false);
    const [isTouchDevice, setIsTouchDevice] = useState(false);
    const [isHovering, setIsHovering] = useState(false);
    const rafRef = useRef<number>(0);

    const TRAIL_COUNT = 6;
    const TRAIL_DELAY = 0.08; // Each trail segment lerps at a slightly different speed

    useEffect(() => {
        const hasFinePointer = window.matchMedia('(hover: hover) and (pointer: fine)').matches;
        if (!hasFinePointer) {
            setIsTouchDevice(true);
            return;
        }

        // Initialize trail positions
        positions.current = Array.from({ length: TRAIL_COUNT }, () => ({ x: -200, y: -200 }));

        const onMouseMove = (e: MouseEvent) => {
            mousePos.current = { x: e.clientX, y: e.clientY };
            if (!isVisible) setIsVisible(true);
        };

        const onMouseEnter = () => setIsVisible(true);
        const onMouseLeave = () => setIsVisible(false);

        const onMouseOver = (e: MouseEvent) => {
            const target = e.target as HTMLElement;
            if (target.closest('a') || target.closest('button') || target.closest('[data-cursor-hover]')) {
                setIsHovering(true);
            }
        };

        const onMouseOut = (e: MouseEvent) => {
            const target = e.target as HTMLElement;
            if (target.closest('a') || target.closest('button') || target.closest('[data-cursor-hover]')) {
                setIsHovering(false);
            }
        };

        document.addEventListener('mousemove', onMouseMove);
        document.addEventListener('mouseenter', onMouseEnter);
        document.addEventListener('mouseleave', onMouseLeave);
        document.addEventListener('mouseover', onMouseOver);
        document.addEventListener('mouseout', onMouseOut);

        const animate = () => {
            // Move glow to mouse
            if (glowRef.current) {
                const size = isHovering ? 48 : 20;
                const half = size / 2;
                glowRef.current.style.transform = `translate(${mousePos.current.x - half}px, ${mousePos.current.y - half}px)`;
                glowRef.current.style.width = `${size}px`;
                glowRef.current.style.height = `${size}px`;
            }

            // Trail follows with staggered delay
            for (let i = 0; i < TRAIL_COUNT; i++) {
                const target = i === 0 ? mousePos.current : positions.current[i - 1];
                const speed = TRAIL_DELAY + i * 0.025;
                positions.current[i].x += (target.x - positions.current[i].x) * speed;
                positions.current[i].y += (target.y - positions.current[i].y) * speed;

                const el = trailRefs.current[i];
                if (el) {
                    const trailSize = Math.max(6, 14 - i * 1.5);
                    const halfT = trailSize / 2;
                    el.style.transform = `translate(${positions.current[i].x - halfT}px, ${positions.current[i].y - halfT}px)`;
                    el.style.width = `${trailSize}px`;
                    el.style.height = `${trailSize}px`;
                    el.style.opacity = `${Math.max(0.15, 0.7 - i * 0.1)}`;
                }
            }

            rafRef.current = requestAnimationFrame(animate);
        };
        rafRef.current = requestAnimationFrame(animate);

        return () => {
            document.removeEventListener('mousemove', onMouseMove);
            document.removeEventListener('mouseenter', onMouseEnter);
            document.removeEventListener('mouseleave', onMouseLeave);
            document.removeEventListener('mouseover', onMouseOver);
            document.removeEventListener('mouseout', onMouseOut);
            cancelAnimationFrame(rafRef.current);
        };
    }, [isVisible, isHovering]);

    if (isTouchDevice) return null;

    return (
        <>
            {/* Glow cursor head */}
            <div
                ref={glowRef}
                style={{
                    position: 'fixed',
                    top: 0,
                    left: 0,
                    width: 20,
                    height: 20,
                    borderRadius: '50%',
                    background: 'radial-gradient(circle, rgba(0,209,255,0.9) 0%, rgba(0,209,255,0) 70%)',
                    pointerEvents: 'none',
                    zIndex: 9999,
                    opacity: isVisible ? 1 : 0,
                    transition: 'width 0.2s ease, height 0.2s ease, opacity 0.3s ease',
                    filter: 'blur(1px)',
                }}
            />
            {/* Trailing particles */}
            {Array.from({ length: TRAIL_COUNT }).map((_, i) => (
                <div
                    key={i}
                    ref={(el) => { if (el) trailRefs.current[i] = el; }}
                    style={{
                        position: 'fixed',
                        top: 0,
                        left: 0,
                        width: 14 - i * 1.5,
                        height: 14 - i * 1.5,
                        borderRadius: '50%',
                        background: i % 2 === 0
                            ? 'rgba(0,209,255,0.6)'
                            : 'rgba(255,84,40,0.5)',
                        pointerEvents: 'none',
                        zIndex: 9998 - i,
                        opacity: 0,
                        transition: 'opacity 0.3s ease',
                        filter: `blur(${1 + i * 0.5}px)`,
                    }}
                />
            ))}
        </>
    );
};

export default CustomCursor;
