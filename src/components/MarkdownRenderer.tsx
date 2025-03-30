interface MarkdownRendererProps {
  content: string;
}

export function MarkdownRenderer({ content }: MarkdownRendererProps) {
  // Process the markdown content
  const processTextContent = (content: string) => {
    // Arrays to store extracted elements
    const headers: Array<{ level: number; text: string }> = [];
    const codeBlocks: string[] = [];

    // Extract code blocks first
    let markupContent = content;
    let codeBlockIndex = 0;

    // Replace code blocks with placeholders
    markupContent = markupContent.replace(/```(.*?)```/gs, (match, code) => {
      codeBlocks.push(code.trim());
      return `__CODE_BLOCK_${codeBlockIndex++}__`;
    });

    // Extract headers with different levels
    let headerIndex = 0;

    // Find and replace h3 headers
    markupContent = markupContent.replace(
      /### (.*?)(\n|$)/g,
      (match, headerText) => {
        headers.push({ level: 3, text: headerText.trim() });
        return `__HEADER_${headerIndex++}__\n`;
      },
    );

    // Find and replace h2 headers
    markupContent = markupContent.replace(
      /## (.*?)(\n|$)/g,
      (match, headerText) => {
        headers.push({ level: 2, text: headerText.trim() });
        return `__HEADER_${headerIndex++}__\n`;
      },
    );

    // Find and replace h1 headers
    markupContent = markupContent.replace(
      /# (.*?)(\n|$)/g,
      (match, headerText) => {
        headers.push({ level: 1, text: headerText.trim() });
        return `__HEADER_${headerIndex++}__\n`;
      },
    );

    // Clean up remaining markdown formatting
    // Replace bold markdown with plain text
    markupContent = markupContent.replace(/\*\*(.*?)\*\*/g, '$1');
    // Replace italic markdown with plain text
    markupContent = markupContent.replace(/\*(.*?)\*/g, '$1');

    // Split content by line to handle lists and paragraphs
    const lines = markupContent.split('\n');

    // Render the processed content
    return (
      <view className="formatted-text">
        {lines.map((line, index) => {
          // Check for header placeholder
          const headerMatch = line.match(/__HEADER_(\d+)__/);
          if (headerMatch) {
            const headerIndex = parseInt(headerMatch[1]);
            const header = headers[headerIndex];
            return (
              <text
                key={`header-${index}`}
                className={`text-header header-level-${header.level}`}
              >
                {header.text}
              </text>
            );
          }

          // Check for code block placeholder
          const codeBlockMatch = line.match(/__CODE_BLOCK_(\d+)__/);
          if (codeBlockMatch) {
            const blockIndex = parseInt(codeBlockMatch[1]);
            const code = codeBlocks[blockIndex];
            return (
              <view key={`code-${index}`} className="code-block">
                <text className="code-content">{code}</text>
              </view>
            );
          }

          // Check if line is a list item
          if (
            line.trim().startsWith('* ') ||
            line.trim().startsWith('- ') ||
            line.trim().match(/^\d+\./)
          ) {
            const itemText = line
              .trim()
              .replace(/^[*\-]\s+/, '')
              .replace(/^\d+\.\s+/, '');
            return (
              <view key={`list-${index}`} className="list-item">
                <text className="list-bullet">•</text>
                <text className="list-text">{itemText}</text>
              </view>
            );
          }

          // Regular text paragraph
          if (line.trim() !== '') {
            return (
              <text key={`text-${index}`} className="text-paragraph">
                {line}
              </text>
            );
          }

          // Empty line for spacing
          return (
            <text key={`space-${index}`} className="text-space">
              {' '}
            </text>
          );
        })}
      </view>
    );
  };

  return processTextContent(content);
}
