// import { FC, useEffect } from 'react';

import { useEffect } from 'react';

interface DocumentTitleProps {
  title: string;
}

const DocumentTitle = ({ title }: DocumentTitleProps): void => {
  useEffect(
    () => {
      document.title = title;
    },
    [title] // Only update the title when the title prop changes)
  );
};

export default DocumentTitle;
