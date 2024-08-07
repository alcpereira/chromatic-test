const UrlComponent = () => {
  const currentUrl = window.location.href;
  const navigator = window.navigator;
  return (
    <div>
      <p>url: {currentUrl}</p>
      <p>navigator.userAgent: {navigator.userAgent}</p>
      <p>navigator.webdriver: {JSON.stringify(navigator.webdriver)}</p>
      <p>navigator.vendor: {navigator.vendor}</p>
    </div>
  );
};

export default UrlComponent;
