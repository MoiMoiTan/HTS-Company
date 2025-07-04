"use client";

import React, {
  forwardRef,
  useCallback,
  useEffect,
  useImperativeHandle,
  useMemo,
  useState,
} from "react";
import { motion, AnimatePresence, Transition, Variant } from "framer-motion";

// Helper function để nối các class name
function cn(...classes: (string | undefined | null | boolean)[]): string {
  return classes.filter(Boolean).join(" ");
}

// Định nghĩa các Ref Handle
export interface RotatingTextRef {
  next: () => void;
  previous: () => void;
  jumpTo: (index: number) => void;
  reset: () => void;
}

// Định nghĩa props
export interface RotatingTextProps
  extends Omit<
    React.ComponentPropsWithoutRef<typeof motion.span>,
    "children" | "transition" | "initial" | "animate" | "exit"
  > {
  texts: string[];
  transition?: Transition;
  initial?: Variant;
  animate?: Variant;
  exit?: Variant;
  animatePresenceMode?: "sync" | "wait";
  animatePresenceInitial?: boolean;
  rotationInterval?: number;
  staggerDuration?: number;
  loop?: boolean;
  auto?: boolean;
  splitBy?: "characters" | "words" | "lines" | string;
  onNext?: (index: number) => void;
  mainClassName?: string;
  splitLevelClassName?: string;
  elementLevelClassName?: string;
}

const RotatingText = forwardRef<RotatingTextRef, RotatingTextProps>(
  (
    {
      texts,
      // Giá trị mặc định đã được tinh chỉnh để có hiệu ứng mượt mà
      transition = { ease: "easeOut", duration: 0.4 },
      initial = { opacity: 0, y: 15 },
      animate = { opacity: 1, y: 0 },
      exit = { opacity: 0, y: -15 },
      splitBy = "words",
      animatePresenceMode = "wait",
      animatePresenceInitial = false,
      rotationInterval = 2500,
      staggerDuration = 0.04,
      loop = true,
      auto = true,
      onNext,
      mainClassName,
      splitLevelClassName,
      elementLevelClassName,
      ...rest
    },
    ref
  ) => {
    const [currentTextIndex, setCurrentTextIndex] = useState<number>(0);

    const splitIntoCharacters = (text: string): string[] => {
      if (typeof Intl !== "undefined" && Intl.Segmenter) {
        const segmenter = new Intl.Segmenter("en", { granularity: "grapheme" });
        return Array.from(
          segmenter.segment(text),
          (segment) => segment.segment
        );
      }
      return Array.from(text);
    };

    const elements = useMemo(() => {
      const currentText: string = texts[currentTextIndex] ?? "";
      if (splitBy === "characters") {
        const words = currentText.split(" ");
        return words.map((word, i) => ({
          characters: splitIntoCharacters(word),
          needsSpace: i !== words.length - 1,
        }));
      }
      if (splitBy === "words") {
        return currentText.split(" ").map((word, i, arr) => ({
          characters: [word],
          needsSpace: i !== arr.length - 1,
        }));
      }
      if (splitBy === "lines") {
        return currentText.split("\n").map((line, i, arr) => ({
          characters: [line],
          needsSpace: i !== arr.length - 1,
        }));
      }
      return [{ characters: [currentText], needsSpace: false }];
    }, [texts, currentTextIndex, splitBy]);

    const handleIndexChange = useCallback(
      (newIndex: number) => {
        setCurrentTextIndex(newIndex);
        if (onNext) onNext(newIndex);
      },
      [onNext]
    );

    const next = useCallback(() => {
      const nextIndex =
        currentTextIndex === texts.length - 1
          ? loop
            ? 0
            : currentTextIndex
          : currentTextIndex + 1;
      if (nextIndex !== currentTextIndex) {
        handleIndexChange(nextIndex);
      }
    }, [currentTextIndex, texts.length, loop, handleIndexChange]);

    const previous = useCallback(() => {
      const prevIndex =
        currentTextIndex === 0
          ? loop
            ? texts.length - 1
            : currentTextIndex
          : currentTextIndex - 1;
      if (prevIndex !== currentTextIndex) {
        handleIndexChange(prevIndex);
      }
    }, [currentTextIndex, texts.length, loop, handleIndexChange]);

    const jumpTo = useCallback(
      (index: number) => {
        const validIndex = Math.max(0, Math.min(index, texts.length - 1));
        if (validIndex !== currentTextIndex) {
          handleIndexChange(validIndex);
        }
      },
      [texts.length, currentTextIndex, handleIndexChange]
    );

    const reset = useCallback(() => {
      if (currentTextIndex !== 0) {
        handleIndexChange(0);
      }
    }, [currentTextIndex, handleIndexChange]);

    useImperativeHandle(ref, () => ({ next, previous, jumpTo, reset }), [
      next,
      previous,
      jumpTo,
      reset,
    ]);

    useEffect(() => {
      if (!auto) return;
      const intervalId = setInterval(next, rotationInterval);
      return () => clearInterval(intervalId);
    }, [next, rotationInterval, auto]);

    return (
      <motion.span
        className={cn("inline-flex flex-wrap relative", mainClassName)}
        {...rest}
      >
        <AnimatePresence
          mode={animatePresenceMode}
          initial={animatePresenceInitial}
        >
          <motion.span
            key={currentTextIndex}
            className={cn("flex flex-wrap", splitLevelClassName)}
            initial="initial"
            animate="animate"
            exit="exit"
            variants={{
              animate: {
                transition: {
                  staggerChildren: staggerDuration,
                },
              },
            }}
          >
            {elements.map((wordObj, wordIndex) => (
              <span
                key={wordIndex}
                className={cn("inline-flex", splitLevelClassName)}
              >
                {wordObj.characters.map((char, charIndex) => (
                  <motion.span
                    key={charIndex}
                    variants={{ initial, animate, exit }}
                    transition={transition}
                    className={cn("inline-block", elementLevelClassName)}
                  >
                    {char}
                  </motion.span>
                ))}
                {wordObj.needsSpace && (
                  <span className="whitespace-pre"> </span>
                )}
              </span>
            ))}
          </motion.span>
        </AnimatePresence>
        <span className="sr-only">{texts[currentTextIndex]}</span>
      </motion.span>
    );
  }
);

RotatingText.displayName = "RotatingText";
export default RotatingText;
