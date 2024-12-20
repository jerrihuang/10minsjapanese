import * as React from "react";
import { StyleSheet } from "react-nativescript";
import { FrameNavigationProp } from "react-nativescript-navigation";
import { MainStackParamList } from "../../NavigationParamList";

type HomeScreenProps = {
    navigation: FrameNavigationProp<MainStackParamList, "Home">;
};

export function HomeScreen({ navigation }: HomeScreenProps) {
    return (
        <flexboxLayout style={styles.container}>
            <label className="text-2xl font-bold text-center mb-8">
                10 Minute Japanese
            </label>
            
            <button
                className="bg-blue-500 text-white p-4 rounded-lg mb-4 w-3/4"
                onTap={() => navigation.navigate("Hiragana")}
            >
                Hiragana Learning
            </button>
            
            <button
                className="bg-green-500 text-white p-4 rounded-lg mb-4 w-3/4"
                onTap={() => navigation.navigate("Conversation")}
            >
                Conversation Practice
            </button>
            
            <button
                className="bg-purple-500 text-white p-4 rounded-lg w-3/4"
                onTap={() => navigation.navigate("Video")}
            >
                Video Lessons
            </button>
        </flexboxLayout>
    );
}

const styles = StyleSheet.create({
    container: {
        height: "100%",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "#f5f5f5",
    },
});