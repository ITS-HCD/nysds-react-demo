import {
  NysGlobalHeaderComponent,
  NysDropdownMenuComponent,
  NysDropdownMenuItemComponent,
  NysButtonComponent,
  NysAvatarComponent,
  NysAlertComponent,
  NysDividerComponent,
} from "../utils/nysds-components";

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
      <NysAlertComponent
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
      <NysGlobalHeaderComponent appName="Testing Form">
        <NysButtonComponent
          id="trigger-id1"
          slot="user-actions"
          label="Settings"
          prefixIcon="slotted"
        >
          <NysAvatarComponent
            slot="prefix-icon"
            initials="NY"
          ></NysAvatarComponent>
        </NysButtonComponent>
      </NysGlobalHeaderComponent>

      <NysDropdownMenuComponent id="dropdownmenu1" for="trigger-id1">
        <NysDropdownMenuItemComponent
          label="Profile"
          href="/profile"
          target="_blank"
        ></NysDropdownMenuItemComponent>
        <NysDropdownMenuItemComponent
          label="Repositories & Github Pages"
          href="/repos"
          target="_blank"
        ></NysDropdownMenuItemComponent>
        <NysDropdownMenuItemComponent
          label="Organizations"
          href="/organizations"
          target="_blank"
        ></NysDropdownMenuItemComponent>
        <NysDropdownMenuItemComponent
          label="Sign out"
          href="/logout"
          target="_blank"
        ></NysDropdownMenuItemComponent>
      </NysDropdownMenuComponent>

      {/* Trigger test 2 */}
      <NysDividerComponent />
      <h2>
        Dropdown with <code>position="top-end"</code>
      </h2>

      <NysGlobalHeaderComponent
        appName="User Registration Form"
        agencyName="Office of Information Technology Services"
      >
        <NysButtonComponent
          id="trigger-id2"
          slot="user-actions"
          label="Log out"
          prefixIcon="slotted"
        >
          <NysAvatarComponent
            slot="prefix-icon"
            initials="NY"
          ></NysAvatarComponent>
        </NysButtonComponent>
      </NysGlobalHeaderComponent>

      <NysDropdownMenuComponent
        id="dropdownmenu2"
        for="trigger-id2"
        position="top-end"
      >
        <NysDropdownMenuItemComponent
          label="Profile"
          href="/profile"
        ></NysDropdownMenuItemComponent>
        <NysDropdownMenuItemComponent
          label="Repositories & Github Pages"
          href="/repos"
        ></NysDropdownMenuItemComponent>
        <NysDropdownMenuItemComponent
          label="Organizations"
          href="/organizations"
        ></NysDropdownMenuItemComponent>
        <NysDropdownMenuItemComponent
          label="Sign out"
          href="/logout"
        ></NysDropdownMenuItemComponent>
      </NysDropdownMenuComponent>

      <NysDividerComponent />

      {/* Trigger test 3 */}
      <NysDividerComponent />
      <h2>Dropdown Action Menu with Icons</h2>
      <NysButtonComponent
        id="trigger-id3"
        label="Actions Dropdown"
      ></NysButtonComponent>
      <NysDropdownMenuComponent
        id="dropdownmenu3"
        for="trigger-id3"
        position="bottom-end"
      >
        <NysDropdownMenuItemComponent
          label="Fire Confetti"
          prefixIcon="lock_filled"
          onNysClick={() => fireConfetti()}
        ></NysDropdownMenuItemComponent>
        <NysDropdownMenuItemComponent
          label="Action 2"
          prefixIcon="social_youtube"
        ></NysDropdownMenuItemComponent>
        <NysDropdownMenuItemComponent
          label="Disabled Action 3"
          prefixIcon="visibility"
          disabled
        ></NysDropdownMenuItemComponent>
        <NysDropdownMenuItemComponent
          label="Action 4"
          prefixIcon="sms"
        ></NysDropdownMenuItemComponent>
      </NysDropdownMenuComponent>
      {/****** END TESTING ******/}
    </div>
  );
};

export default ShowcasePage;
