import {Config} from 'remotion';

Config.Output.setOverwriteOutput(true);
Config.Rendering.setConcurrency(10);
Config.Bundling.setCachingEnabled(false);
