/**
 * Main Phoenix API client
 */
import { ClientConfig } from './types';
import { Jobs } from '../endpoints/Jobs';
import { Projects } from '../endpoints/Projects';
import { Libraries } from '../endpoints/Libraries';
import { Presets } from '../endpoints/Presets';

export class Phoenix {
  public readonly jobs: Jobs;
  public readonly projects: Projects;
  public readonly libraries: Libraries;
  public readonly presets: Presets;

  constructor(config: ClientConfig) {
    this.jobs = new Jobs(config);
    this.projects = new Projects(config);
    this.libraries = new Libraries(config);
    this.presets = new Presets(config);
  }
}