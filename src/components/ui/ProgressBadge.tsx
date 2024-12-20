import * as React from "react";

type ProgressBadgeProps = {
    progress: number;
};

export function ProgressBadge({ progress }: ProgressBadgeProps) {
    return (
        <flexboxLayout className="bg-gray-200 rounded-full p-1 mb-2">
            <label className="text-sm">
                {progress}% Complete
            </label>
        </flexboxLayout>
    );
}