import "../styles/Home.scss";
import { useEffect } from "react";
import confetti from "canvas-confetti";

const HomePage = () => {
  // NYSDS 1 year anniversary confetti 🎉
  useEffect(() => {
    const duration = 1500;
    const animationEnd = Date.now() + duration;

    const interval = setInterval(() => {
      if (Date.now() > animationEnd) {
        clearInterval(interval);
        return;
      }

      confetti({
        particleCount: 100,
        startVelocity: 30,
        spread: 360,
        origin: {
          x: Math.random(),
          // since they fall down, start a bit higher than random
          y: Math.random() - 0.2,
        },
      });
    }, 200);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="main-content nys-display-flex nys-flex-column nys-flex-align-center">
      <div className="welcome-section">
        <h1>Welcome to the React Demo!</h1>
        <img
          src="/nysds-react-demo/homepage-grid.svg"
          alt=""
          role="presentation"
        />
      </div>
      <div className="card-section">
        <a
          className="card card--link"
          href="https://github.com/ITS-HCD/nysds-react-demo"
          target="_blank"
          rel="noreferrer"
        >
          <div className="svg-img">
            <svg
              viewBox="0 0 170 170"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M0 0H170V170H48C21.4903 170 0 148.51 0 122V0Z"
                fill="#E5EFFA"
              ></path>
              <path
                d="M52.9 84.5469L70.499 102.146C71.3316 102.978 71.7479 104.038 71.7479 105.325C71.7479 106.612 71.3316 107.672 70.499 108.504C69.6663 109.337 68.6066 109.753 67.3198 109.753C66.033 109.753 64.9733 109.337 64.1406 108.504L43.249 87.6125C42.7948 87.1583 42.4731 86.6663 42.2839 86.1365C42.0946 85.6066 42 85.0389 42 84.4333C42 83.8278 42.0946 83.2601 42.2839 82.7302C42.4731 82.2003 42.7948 81.7083 43.249 81.2542L64.1406 60.3625C65.049 59.4542 66.1276 59 67.3766 59C68.6255 59 69.7042 59.4542 70.6125 60.3625C71.5208 61.2708 71.975 62.3495 71.975 63.5984C71.975 64.8474 71.5208 65.926 70.6125 66.8344L52.9 84.5469ZM118.073 84.3198L100.474 66.7208C99.6413 65.8882 99.225 64.8285 99.225 63.5417C99.225 62.2549 99.6413 61.1951 100.474 60.3625C101.307 59.5299 102.366 59.1135 103.653 59.1135C104.94 59.1135 106 59.5299 106.832 60.3625L127.724 81.2542C128.178 81.7083 128.5 82.2003 128.689 82.7302C128.878 83.2601 128.973 83.8278 128.973 84.4333C128.973 85.0389 128.878 85.6066 128.689 86.1365C128.5 86.6663 128.178 87.1583 127.724 87.6125L106.832 108.504C105.924 109.413 104.864 109.848 103.653 109.81C102.442 109.772 101.382 109.299 100.474 108.391C99.5656 107.482 99.1115 106.404 99.1115 105.155C99.1115 103.906 99.5656 102.827 100.474 101.919L118.073 84.3198Z"
                fill="#154973"
              ></path>
            </svg>
          </div>
          <p className="centered-link">
            Please read the <span>README</span> of this repository for details.
          </p>
        </a>
        <a
          className="card card--link"
          href="https://designsystem.ny.gov/updates/"
          target="_blank"
          rel="noreferrer"
        >
          <img
            src="/nysds-react-demo/one-year-anniversary.gif"
            alt=""
            role="presentation"
          />
          <p className="centered-link">
            Yahoo! <span>NYSDS</span> celebrates its 1-year anniversary!!
          </p>
        </a>
      </div>
    </div>
  );
};

export default HomePage;
