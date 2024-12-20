import * as React from "react";
import { StyleSheet } from "react-nativescript";

type ButtonProps = {
    text: string;
    icon?: string;
    onTap: () => void;
    backgroundColor?: string;
};

export function Button({ text, icon, onTap, backgroundColor = "#4A90E2" }: ButtonProps) {
    return (
        <button 
            className={`p-4 rounded-lg mb-4 w-3/4 text-center`}
            style={[styles.button, { backgroundColor }]}
            onTap={onTap}
        >
            {icon && <label className="text-2xl mb-2">{icon}</label>}
            <label className="text-white text-lg">{text}</label>
        </button>
    );
}