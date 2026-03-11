import {
  NysGlobalHeader,
  NysDropdownMenu,
  NysDropdownMenuItem,
  NysButton,
  NysAvatar,
  NysAlert,
  NysDivider,
} from "@nysds/components/react";

import "../styles/Showcase.scss";
import confetti from "canvas-confetti";

const fireConfetti = () => {
  const duration = 1500;
  const animationEnd = Date.now() + duration;

  const interval = setInterval(() => {
    if (Date.now() > animationEnd) {
      return clearInterval(interval);
    }

    // More confetti!
    confetti({
      particleCount: 55,
      spread: 150,
      startVelocity: 30,
      origin: {
        x: Math.random(),
        y: Math.random() - 0.2,
      },
    });
  }, 100);
};

const ShowcasePage = () => {
  return (
    <div className="main-content--showcase nys-display-flex nys-flex-column">
      <h1>DEV Playground & Showcase</h1>
      <NysAlert
        type="info"
        icon="code"
        heading="DEV Playground"
        text="Page is intended for internal usage only. For showcasing upcoming component & testing."
        primaryLabel="Checkout NYSDS reference site instead for component guides"
        primaryAction="https://designsystem.ny.gov/"
        dismissible
      />

      {/****** TESTING Upcoming COMPONENT ******/}
      {/* Trigger test 1 */}
      <h2>Classic Dropdown Nav Menu</h2>
      <p>
        <code className="snippet">
          {`<nys-button id="my-trigger-id" label="trigger"> Open Menu</nys-button>

<nys-dropdownmenu id="my-dropdownmenu" for="my-trigger-id">
  <nys-dropdownmenuitem label="Profile" href="/profile">
  </nys-dropdownmenuitem>

  <nys-dropdownmenuitem label="Repositories & Github Pages" href="/repos">
  </nys-dropdownmenuitem>

  <nys-dropdownmenuitem label="Organizations" href="/organizations">
  </nys-dropdownmenuitem>

  <nys-dropdownmenuitem label="Sign out" href="/logout">
  </nys-dropdownmenuitem>
</nys-dropdownmenu>`}
        </code>
      </p>
      <NysGlobalHeader appName="Testing Form">
        <NysButton
          id="trigger-id1"
          slot="user-actions"
          label="Settings"
          prefixIcon="slotted"
        >
          <NysAvatar
            slot="prefix-icon"
            initials="NY"
          ></NysAvatar>
        </NysButton>
      </NysGlobalHeader>

      <NysDropdownMenu id="dropdownmenu1" for="trigger-id1">
        <NysDropdownMenuItem
          label="Profile"
          href="/profile"
          target="_blank"
        ></NysDropdownMenuItem>
        <NysDropdownMenuItem
          label="Repositories & Github Pages"
          href="/repos"
          target="_blank"
        ></NysDropdownMenuItem>
        <NysDropdownMenuItem
          label="Organizations"
          href="/organizations"
          target="_blank"
        ></NysDropdownMenuItem>
        <NysDropdownMenuItem
          label="Sign out"
          href="/logout"
          target="_blank"
        ></NysDropdownMenuItem>
      </NysDropdownMenu>

      {/* Trigger test 2 */}
      <NysDivider />
      <h2>
        Dropdown with <code>position="top-end"</code>
      </h2>

      <NysGlobalHeader
        appName="User Registration Form"
        agencyName="Office of Information Technology Services"
      >
        <NysButton
          id="trigger-id2"
          slot="user-actions"
          label="Log out"
          prefixIcon="slotted"
        >
          <NysAvatar
            slot="prefix-icon"
            initials="NY"
          ></NysAvatar>
        </NysButton>
      </NysGlobalHeader>

      <NysDropdownMenu
        id="dropdownmenu2"
        for="trigger-id2"
        position="top-end"
      >
        <NysDropdownMenuItem
          label="Profile"
          href="/profile"
        ></NysDropdownMenuItem>
        <NysDropdownMenuItem
          label="Repositories & Github Pages"
          href="/repos"
        ></NysDropdownMenuItem>
        <NysDropdownMenuItem
          label="Organizations"
          href="/organizations"
        ></NysDropdownMenuItem>
        <NysDropdownMenuItem
          label="Sign out"
          href="/logout"
        ></NysDropdownMenuItem>
      </NysDropdownMenu>

      <NysDivider />

      {/* Trigger test 3 */}
      <NysDivider />
      <h2>Dropdown Action Menu with Icons</h2>
      <NysButton
        id="trigger-id3"
        label="Actions Dropdown"
      ></NysButton>
      <NysDropdownMenu
        id="dropdownmenu3"
        for="trigger-id3"
        position="bottom-end"
      >
        <NysDropdownMenuItem
          label="Fire Confetti"
          prefixIcon="lock_filled"
          onNysClick={() => fireConfetti()}
        ></NysDropdownMenuItem>
        <NysDropdownMenuItem
          label="Action 2"
          prefixIcon="social_youtube"
        ></NysDropdownMenuItem>
        <NysDropdownMenuItem
          label="Disabled Action 3"
          prefixIcon="visibility"
          disabled
        ></NysDropdownMenuItem>
        <NysDropdownMenuItem
          label="Action 4"
          prefixIcon="sms"
        ></NysDropdownMenuItem>
      </NysDropdownMenu>
      {/****** END TESTING ******/}
    </div>
  );
};

export default ShowcasePage;