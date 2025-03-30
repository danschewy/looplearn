// Helper function to get icon class based on category name
export const getCategoryIconClass = (iconName: string) => {
  const iconMap: Record<string, string> = {
    science_icon: 'icon-science',
    history_icon: 'icon-history',
    tech_icon: 'icon-technology',
    art_icon: 'icon-art',
    life_icon: 'icon-life',
  };

  return iconMap[iconName] || 'icon-default';
};
