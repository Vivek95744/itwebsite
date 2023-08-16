import app1 from "../../assets/app1.webp";
import app2 from "../../assets/app2.webp";
import app3 from "../../assets/app3.webp";
import web1 from "../../assets/web1.webp";
import web2 from "../../assets/web2.webp";
import web3 from "../../assets/web3.webp";

export const categories = [
    { label: "All", images: [{name:'App 1',name1:'APP',link:app1}, {name:'Web 3',name1:'WEB',link:web3}, {name:'App 2',name1:'APP',link:app2}, {name:'App 3',name1:'APP',link:app3}, {name:'Web 2',name1:'WEB',link:web2}, {name:'Web 1',name1:'WEB',link:web1}] },
    { label: "Web", images: [{name:'Web 3',name1:'WEB',link:web3},{name:'Web 2',name1:'WEB',link:web2}, {name:'Web 1',name1:'WEB',link:web1}] },
    { label: "App", images: [{name:'App 1', name1:'APP',link:app1},{name:'App 2',name1:'APP',link:app2}, {name:'App 3',name1:'APP',link:app3},] },
  ];