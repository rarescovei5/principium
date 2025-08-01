const solid = {
  default: 'bg-border-100 text-background-950',
  primary: 'bg-primary-400 text-primary-50 dark:bg-primary-600 dark:text-primary-950',
  secondary: 'bg-secondary-400 text-secondary-50 dark:bg-secondary-600 dark:text-secondary-950',
  success: 'bg-success-400 text-success-950 dark:bg-success-600 dark:text-success-50',
  warning: 'bg-warning-400 text-warning-950 dark:bg-warning-600 dark:text-warning-50',
  danger: 'bg-danger-400 text-danger-50 dark:bg-danger-600 dark:text-danger-950',
};

const shadow = {
  default: `shadow-lg shadow-border-300/50 ${solid.default}`,
  primary: `shadow-lg shadow-primary-400/40 ${solid.primary} dark:shadow-primary-600/40`,
  secondary: `shadow-lg shadow-secondary-400/40 ${solid.secondary} dark:shadow-secondary-600/40`,
  success: `shadow-lg shadow-success-400/40 ${solid.success} dark:shadow-success-600/40`,
  warning: `shadow-lg shadow-warning-400/40 ${solid.warning} dark:shadow-warning-600/40`,
  danger: `shadow-lg shadow-danger-400/40 ${solid.danger} dark:shadow-danger-600/40`,
};

const bordered = {
  default: 'bg-transparent border-border-300 text-background-950',
  primary:
    'bg-transparent border-primary-400 text-primary-500 dark:border-primary-600 dark:text-primary-600',
  secondary:
    'bg-transparent border-secondary-400 text-secondary-500 dark:border-secondary-600 dark:text-secondary-600',
  success:
    'bg-transparent border-success-400 text-success-500 dark:border-success-600 dark:text-success-600',
  warning:
    'bg-transparent border-warning-400 text-warning-500 dark:border-warning-600 dark:text-warning-600',
  danger:
    'bg-transparent border-danger-400 text-danger-500 dark:border-danger-600 dark:text-danger-600',
};

const flat = {
  default: 'bg-border-300/40 text-background-950',
  primary: 'bg-primary-400/20 text-primary-500 dark:bg-primary-600/20 dark:text-primary-600',
  secondary:
    'bg-secondary-400/20 text-secondary-500 dark:bg-secondary-600/20 dark:text-secondary-600',
  success: 'bg-success-400/20 text-success-500 dark:bg-success-600/20 dark:text-success-600',
  warning: 'bg-warning-400/20 text-warning-500 dark:bg-warning-600/20 dark:text-warning-600',
  danger: 'bg-danger-400/20 text-danger-500 dark:bg-danger-600/20 dark:text-danger-600',
};

const faded = {
  default: 'border-border-300 bg-border-100 text-background-950',
  primary: 'border-border-300 bg-border-100 text-primary-400 dark:text-primary-600',
  secondary: 'border-border-300 bg-border-100 text-secondary-400 dark:text-secondary-600',
  success: 'border-border-300 bg-border-100 text-success-400 dark:text-success-600',
  warning: 'border-border-300 bg-border-100 text-warning-400 dark:text-warning-600',
  danger: 'border-border-300 bg-border-100 text-danger-400 dark:text-danger-600',
};

const light = {
  default: 'bg-transparent text-background-950',
  primary: 'bg-transparent text-primary-500 dark:text-primary-600',
  secondary: 'bg-transparent text-secondary-500 dark:text-secondary-600',
  success: 'bg-transparent text-success-500 dark:text-success-600',
  warning: 'bg-transparent text-warning-500 dark:text-warning-600',
  danger: 'bg-transparent text-danger-500 dark:text-danger-600',
};

const ghost = {
  default: 'bg-transparent border-border-300 text-background-950',
  primary:
    'bg-transparent border-primary-400 text-primary-500 dark:border-primary-600 dark:text-primary-600',
  secondary:
    'bg-transparent border-secondary-400 text-secondary-500 dark:border-secondary-600 dark:text-secondary-600',
  success:
    'bg-transparent border-success-400 text-success-500 dark:border-success-600 dark:text-success-600',
  warning:
    'bg-transparent border-warning-400 text-warning-500 dark:border-warning-600 dark:text-warning-600',
  danger:
    'bg-transparent border-danger-400 text-danger-500 dark:border-danger-600 dark:text-danger-600',
};

export const colorVariants = {
  solid,
  shadow,
  bordered,
  flat,
  faded,
  light,
  ghost,
};
