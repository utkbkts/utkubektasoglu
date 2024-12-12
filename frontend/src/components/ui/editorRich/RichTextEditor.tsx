"use client";

import { cn } from "@/lib/utils";
import { forwardRef, useEffect, useState } from "react";
import { Editor } from "react-draft-wysiwyg";
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";
import {
  EditorState,
  convertToRaw,
  convertFromRaw,
  ContentState,
  RawDraftContentState,
} from "draft-js";
import { draftToMarkdown } from "markdown-draft-js";

interface RichTextEditorProps {
  projectData?: {
    project: {
      description: string;
    };
  };
  onChange: (markdown: string) => void;
  editorClassName?: string;
}

const RichTextEditor = forwardRef<HTMLDivElement, RichTextEditorProps>(
  ({ projectData, onChange, ...props }, ref) => {
    const [editorState, setEditorState] = useState(EditorState.createEmpty());

    useEffect(() => {
      if (projectData) {
        try {
          const rawContentState: RawDraftContentState | null = projectData
            .project.description
            ? JSON.parse(projectData.project.description)
            : null;

          if (rawContentState) {
            const contentState = convertFromRaw(rawContentState);
            setEditorState(EditorState.createWithContent(contentState));
          } else {
            setEditorState(EditorState.createEmpty());
          }
        } catch (error) {
          console.error("JSON parsing error:", error);
          setEditorState(
            EditorState.createWithContent(
              ContentState.createFromText(projectData.project.description || "")
            )
          );
        }
      }
    }, [projectData]);

    const handleEditorChange = (state: EditorState) => {
      setEditorState(state);
      const contentState = state.getCurrentContent();
      try {
        const rawContent = convertToRaw(contentState);
        const markdown = draftToMarkdown(rawContent);
        onChange(markdown);
      } catch (error) {
        console.error("Markdown conversion error:", error);
      }
    };

    return (
      <Editor
        editorState={editorState}
        onEditorStateChange={handleEditorChange}
        editorClassName={cn(
          "border rounded-md px-3 min-h-[150px] cursor-text ring-offset-background focus-within:outline-none focus-within:ring-2 focus-within:ring-ring focus-within:ring-offset-2",
          props.editorClassName
        )}
        toolbar={{
          options: ["inline", "list", "link", "history"],
          inline: {
            options: ["bold", "italic", "underline"],
          },
        }}
        editorRef={(r: any) => {
          if (typeof ref === "function") {
            ref(r as HTMLDivElement);
          } else if (ref) {
            (ref as React.MutableRefObject<HTMLDivElement | null>).current =
              r as HTMLDivElement;
          }
        }}
        {...props}
      />
    );
  }
);

RichTextEditor.displayName = "RichTextEditor";

export default RichTextEditor;
