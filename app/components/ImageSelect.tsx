"use client";

import { ImageSelectProps } from "@/types/ImageSelectOption";
import Image from "next/image";
import { useEffect, useId, useRef, useState } from "react";
import styles from "../styles/components/ImageSelect.module.scss";

export default function ImageSelect({ options, value }: ImageSelectProps) {
    const [open, setOpen] = useState(false);
    const selectDivRef = useRef<HTMLDivElement>(null);
    const selectDivId = useId();

    const selected = options.find(option => option.value === value) ?? options[0];

    useEffect(() => {
        const handleOutsideClick = (evt: MouseEvent) => {
            if (!selectDivRef.current?.contains(evt.target as Node)) {
                setOpen(false);
            }
        }

        document.addEventListener("mousedown", handleOutsideClick);
        return document.removeEventListener("mousedown", handleOutsideClick);
    }, []);

    const handleKeyDown = (evt: React.KeyboardEvent<HTMLButtonElement>) => {
        const currentIndex = options.findIndex(option => option.value == selected.value);

        if (evt.key === "Escape") setOpen(false);

        if (evt.key === "ArrowDown" || evt.key === "ArrowUp") {
            evt.preventDefault();
            let dir = evt.key === "ArrowDown" ? -1:1;
            let nextIndex = (currentIndex + dir + options.length) % options.length;

            // onChange(options[nextIndex].value);
            setOpen(true);
        }
    }

    return (
        <div ref={selectDivRef} className={styles.select}>
            <button className={styles.input} 
                    aria-haspopup="listbox"
                    aria-expanded={open}
                    aria-controls={selectDivId}
                    onClick={() => setOpen(!open)}
                    onKeyDown={handleKeyDown}>
                <Image src={selected.image} alt={selected.label} width={40} height={40} />
                <span>{selected.label}</span>
                <Image src="https://s2.svgbox.net/materialui.svg?ic=keyboard_arrow_down" 
                       alt="Arrow Down" width={15} height={15} />
            </button>

            {open && (
                <div id={selectDivId} className={styles.options} 
                     role="listbox" aria-activedescendant={selected.value}>
                    {options.map((option) => (
                        <button
                            key={option.value}
                            type="button"
                            role="option"
                            aria-selected={option.value === value}
                            className={option.value === value ? styles.selected : styles.option}
                            onClick={() => {
                                setOpen(false);
                            }}
                        >
                            <Image src={option.image} alt={option.label} width={20} height={20} />
                            <span>{option.label}</span>
                        </button>
                    ))}
                </div>
            )}
        </div>
    )
}