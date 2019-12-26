import * as React from "react";
import "./Message.scss";

type MessageProps = {
  message: string | React.ReactNode;
  type: "dark" | "primary" | "link" | "info" | "success" | "warning" | "danger";
};

export default function Message({ message, type }: MessageProps) {
  const typeClassName = type ? `is-${type}` : "";
  const className = `${typeClassName}`;
  return (
    <article className={`message  ${className}`}>
      <div data-testid="messageBody" className="message-body">
        {message}
      </div>
    </article>
  );
}
