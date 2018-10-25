import menubar from 'menubar';
import AutoLaunch from 'auto-launch';
import { Menu } from 'electron';
import dotenv from 'dotenv';

dotenv.config();

// height: 400,
// width: 350,

export const mb = menubar({
    dir: `${__dirname}/../`,
    preloadWindow: true,
    height: 1000,
    width: 1000,
});

const appLauncher = new AutoLaunch({ name: process.env.APP_SLUG });

const contextMenu = Menu.buildFromTemplate([
    {
        label: 'Launch on Login',
        type: 'checkbox',
        checked: false,
        click: item => {
            appLauncher.isEnabled().then(enabled => {
                if (enabled) {
                    return appLauncher.disable().then(() => {
                        item.checked = false;
                    });
                } else {
                    return appLauncher.enable().then(() => {
                        item.checked = true;
                    });
                }
            });
        },
    },
    {
        label: `Quit ${process.env.APP_NAME}`,
        click: () => mb.app.quit(),
    },
]);

mb.on('ready', () => {
    // eslint-disable-next-line
    console.log(`${process.env.APP_NAME} is Ready!!`);
    mb.tray.on('right-click', () => {
        mb.tray.popUpContextMenu(contextMenu);
    });
});
