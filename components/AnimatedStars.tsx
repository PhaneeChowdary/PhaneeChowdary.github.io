import { useEffect, useRef } from "react";
import { useStarEffect } from "@/context/StarEffectContext";

const AnimatedStars = () => {
    const canvasRef = useRef<HTMLCanvasElement>(null);
    const { isStarEffectEnabled } = useStarEffect();

    useEffect(() => {
        if (!isStarEffectEnabled) return;

        const canvas = canvasRef.current;
        if (!canvas) return;

        const ctx = canvas.getContext("2d");
        if (!ctx) return;

        const resizeCanvas = () => {
            canvas.width = window.innerWidth;
            canvas.height = window.innerHeight;
        };
        resizeCanvas();
        window.addEventListener("resize", resizeCanvas);

        class Star {
            x: number;
            y: number;
            baseSize: number;
            speed: number;
            opacity: number;
            z: number;
            waveOffset: number;
            waveSpeed: number;
            waveAmplitude: number;
            baseSpeed: number;

            constructor() {
                this.x = Math.random() * canvas!.width;
                this.y = Math.random() * canvas!.height;
                this.z = Math.random() * 1500;

                const sizeGroup = Math.random();
                if (sizeGroup < 0.6) {
                    this.baseSize = Math.random() * 0.4 + 0.4; // Small stars (60%): 0.3-0.5
                } else if (sizeGroup < 0.9) {
                    this.baseSize = Math.random() * 0.6 + 0.6; // Medium stars (30%): 0.5-0.8
                } else {
                    this.baseSize = Math.random() * 0.8 + 1.0; // Large stars (10%): 0.8-1.0
                }
                this.baseSpeed = Math.random() * 2 + 0.5;
                this.speed = this.baseSpeed;
                this.opacity = Math.random() * 0.5 + 0.5;
                this.waveOffset = Math.random();
                this.waveSpeed = Math.random() * 0.00001;
                this.waveAmplitude = Math.random() * 0.2;
            }

            update() {
                this.z -= this.speed;

                if (this.z <= 1) {
                    this.z = 1500;
                    this.x = canvas!.width + Math.random() * 100;
                    this.y = Math.random() * canvas!.height;
                    this.baseSpeed = Math.random() * 2 + 0.5;
                    this.speed = this.baseSpeed;
                    this.waveOffset = Math.random();
                }

                // Calculate perspective
                const perspective = 1000;
                const scale = perspective / (perspective + this.z);
                this.waveOffset += this.waveSpeed;

                // Calculate new position with wave motion
                const waveY =
                    Math.sin(this.waveOffset) * this.waveAmplitude * scale;
                this.speed = this.baseSpeed * (1 + (1 - scale));

                this.x -= this.speed;
                this.y += waveY;

                // Only reset when star is completely off screen
                if (this.x < -100) {
                    this.x = canvas!.width + Math.random() * 100;
                    this.y = Math.random() * canvas!.height;
                    this.z = Math.random() * 1500;
                }
                if (this.y < 0) this.y = canvas!.height;
                if (this.y > canvas!.height) this.y = 0;
            }

            draw() {
                if (!ctx) return;
                const perspective = 1000;
                const scale = perspective / (perspective + this.z);
                const size = this.baseSize * (1 + (1 - scale));

                ctx.beginPath();
                ctx.arc(this.x, this.y, size, 0, Math.PI * 2);
                ctx.fillStyle = `rgba(128, 128, 128, ${this.opacity * scale})`;
                ctx.fill();
            }
        }

        const stars: Star[] = [];
        const starCount = 250;
        for (let i = 0; i < starCount; i++) {
            stars.push(new Star());
        }

        // Animation loop
        const animate = () => {
            if (!ctx || !canvas || !isStarEffectEnabled) return;
            ctx.clearRect(0, 0, canvas.width, canvas.height);
            stars.sort((a, b) => b.z - a.z);
            stars.forEach((star) => {
                star.update();
                star.draw();
            });

            requestAnimationFrame(animate);
        };

        animate();

        // Cleanup
        return () => {
            window.removeEventListener("resize", resizeCanvas);
        };
    }, [isStarEffectEnabled]);

    if (!isStarEffectEnabled) return null;

    return (
        <canvas
            ref={canvasRef}
            className="fixed top-0 left-0 w-full h-full pointer-events-none z-0"
            style={{ background: "transparent" }}
        />
    );
};

export default AnimatedStars;
