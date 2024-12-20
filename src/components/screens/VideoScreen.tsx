import * as React from "react";
import { StyleSheet } from "react-nativescript";

export function VideoScreen() {
    const videos = [
        { title: "Basic Greetings", duration: "5:00" },
        { title: "Numbers 1-10", duration: "7:30" },
    ];

    return (
        <scrollView>
            <flexboxLayout style={styles.container}>
                <label className="text-xl font-semibold mb-4">
                    Video Lessons
                </label>
                
                {videos.map((video, index) => (
                    <flexboxLayout
                        key={index}
                        className="bg-white p-4 rounded-lg mb-4 w-full"
                    >
                        <label className="text-lg font-medium">
                            {video.title}
                        </label>
                        <label className="text-sm text-gray-500">
                            Duration: {video.duration}
                        </label>
                    </flexboxLayout>
                ))}
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