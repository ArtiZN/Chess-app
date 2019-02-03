import { AppUserService } from './app-user.service';

export function userProviderFactory(provider: AppUserService): Function {
  return () => provider.load();
}
