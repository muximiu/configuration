import Root from "./Views/Root";
import Giphy from "./Components/Giphy";

class App {
  constructor() {
    this.$app = document.getElementById("app");
    this.render();
  }

  render() {
    this.$app.appendChild(Root("Test project works!"));
    this.$app.appendChild(Giphy("3o6Ztb6YB8qg3MvkgE"));
  }
}

new App();