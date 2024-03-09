import AstroIcon from "../svg/AstroIcon.astro";
import CSSIcon from "../svg/CSSIcon.astro";
import GitHubIcon from "../svg/GitHubIcon.astro";
import HTMLIcon from "../svg/HTMLIcon.astro";
import JavaScriptIcon from "../svg/JavaScriptIcon.astro";
import MySQLIcon from "../svg/MySQLIcon.astro";
import NodeIcon from "../svg/NodeIcon.astro";
import PythonIcon from "../svg/PythonIcon.astro";
import ReactIcon from "../svg/ReactIcon.astro";
import ScikitLearnIcon from '../svg/ScikitLearnIcon.astro'
import PandasIcon from '../svg/PandasIcon.astro'
import NumpyIcon from '../svg/NumpyIcon.astro'
import TailWindIcon from "../svg/TailWindIcon.astro";


type IconType = typeof AstroIcon | 
                typeof CSSIcon | 
                typeof HTMLIcon | 
                typeof JavaScriptIcon |
                typeof MySQLIcon |
                typeof NodeIcon | 
                typeof PythonIcon | 
                typeof ReactIcon |
                typeof ScikitLearnIcon |
                typeof PandasIcon |
                typeof NumpyIcon |
                typeof GitHubIcon |
                typeof TailWindIcon


const iconMap: Record<string, IconType> = {
  "AstroIcon": AstroIcon,
  "CSSIcon": CSSIcon,
  "HTMLIcon": HTMLIcon,
  "JavaScriptIcon": JavaScriptIcon,
  "MySQLIcon": MySQLIcon,
  "NodeIcon": NodeIcon,
  "PythonIcon": PythonIcon,
  "ReactIcon": ReactIcon,
  "ScikitLearnIcon": ScikitLearnIcon,
  "PandasIcon": PandasIcon,
  "NumpyIcon" : NumpyIcon,
  "GitHubIcon" : GitHubIcon,
  "TailWindIcon" : TailWindIcon,
};

export {iconMap };
