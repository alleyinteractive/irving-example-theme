import React, { useEffect } from 'react';
import useLoadScript from '@irvingjs/core/hooks/useLoadScript';

const CoralTalkEmbed = () => {
  const loaded = useLoadScript(
    'https://irving-prod-coral.herokuapp.com/assets/js/embed.js',
    'coral'
  );

  useEffect(() => {
    if (window.Coral) {
      window.Coral.createStreamEmbed({
        id: 'coral_thread',
        autoRender: true,
        rootURL: 'https://irving-prod-coral.herokuapp.com/',
      });
    }
  }, [loaded]);

  return (
    <div id="coral_thread" />
  );
};

export default CoralTalkEmbed;
