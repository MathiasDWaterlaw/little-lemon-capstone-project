import "./TemplatePage.css";

export default function TemplatePage({ header }) {
  return (
    <main id='template'>
      <div id='header' className='grid-3-system'>
        <div className='wrapper'>
          <h1 className='h1 markazi'>{header}</h1>
        </div>
      </div>

      <div id='content' className='grid-3-system'>
        <div className='wrapper'>
          <h2 className='h2'>Template Page</h2>
        </div>
      </div>
    </main>
  );
}
