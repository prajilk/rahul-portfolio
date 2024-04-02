import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import Cursor from "./components/ui/Cursor.jsx";
import "./index.css";
import posthog from "posthog-js";
import { PostHogProvider } from "posthog-js/react";

posthog.init("phc_KgQcYKUgHzj4DKqpMaATdTjQikhlAucZl4ek4fUTJDy", {
    api_host: "https://app.posthog.com",
});

ReactDOM.createRoot(document.getElementById("root")).render(
    <React.StrictMode>
        <PostHogProvider client={posthog}>
            <Cursor />
            <App />
        </PostHogProvider>
    </React.StrictMode>
);
