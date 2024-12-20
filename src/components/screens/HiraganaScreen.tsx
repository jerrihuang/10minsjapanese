import * as React from "react";
import { StyleSheet } from "react-nativescript";
import { CharacterGrid } from "../characters/CharacterGrid";
import { CharacterProgress } from "../characters/CharacterProgress";
import { hiraganaCharacters } from "../../data/characters";

export function HiraganaScreen() {
    const [learnedCharacters, setLearnedCharacters] = React.useState<string[]>([]);

    const handleCharacterLearned = (characterId: string) => {
        setLearnedCharacters(prev => [...prev, characterId]);
    };

    const progress = (learnedCharacters.length / hiraganaCharacters.length) * 100;

    return (
        <scrollView>
            <flexboxLayout style={styles.container}>
                <label className="text-xl font-semibold mb-4">
                    Hiragana Characters
                </label>
                
                <CharacterProgress progress={progress} />
                
                <CharacterGrid 
                    characters={hiraganaCharacters}
                    learnedCharacters={learnedCharacters}
                    onCharacterLearned={handleCharacterLearned}
                />
            </flexboxLayout>
        </scrollView>
    );
}

const styles = StyleSheet.create({
    container: {
        flexDirection: "column",
        padding: 16,
        backgroundColor: "#f5f5f5",
    },
});