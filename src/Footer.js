import React from "react";

export default function Footer() {
  return (
    <div className="Footer">
      <footer>
        <small>
          Open-sourced on{" "}
          <a
            href="https://github.com/LinOshiro/weather-app-react"
            target="_blank"
            rel="nooppener noreferrer"
          >
            GitHub{" "}
          </a>
          and{" "}
          <small>
            <a
              href="https://magical-meringue-9dbe5d.netlify.app"
              target="_blank"
              rel="nooppener noreferrer"
            >
              hosted on Netlify
            </a>
          </small>{" "}
          by Lindsay Oshiro
        </small>
      </footer>
    </div>
  );
}
