export interface MenuItem {
    title: string;
    icon?: string;
    active?: boolean;
    type: 'header' | 'dropdown' | 'simple';
    badge?: {
      text: string;
      class: string;
    };
    submenus?: MenuItem[];
  }