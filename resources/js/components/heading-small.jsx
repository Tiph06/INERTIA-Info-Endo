export default function HeadingSmall({ children }) {
    return (
        <h3 className="text-sm font-semibold text-gray-700 dark:text-gray-300">
            {children}
        </h3>
    );
}
