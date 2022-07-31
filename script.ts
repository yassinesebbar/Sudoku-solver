

import Application from './modules/application'
const app = new Application();

if (typeof document !== "undefined") {
    app.run();
} else {
    alert("document does not exist");
}




