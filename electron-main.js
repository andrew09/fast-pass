const menubar = require('menubar');
const AutoLaunch = require('auto-launch');
const { Menu } = require('electron');
const dotenv = require('dotenv');

dotenv.config();

const mb = menubar({
    dir: `${__dirname}/build/`,
    preloadWindow: true,
    height: 250,
    width: 400,
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
mb.on('after-create-window', () => {
    mb.window.setResizable(false);
    if (process.env.NODE_ENV !== 'production')
        mb.window.loadURL('http://localhost:3000/');
});

mb.on('ready', () => {
    // eslint-disable-next-line
    console.log(`${process.env.APP_NAME} is Ready!!`);
    mb.tray.on('right-click', () => {
        mb.tray.popUpContextMenu(contextMenu);
    });
});
