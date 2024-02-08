interface NotificationType {
  type: string;
  title?: string;
  message?: string;
  image?: string;
}

interface NotificationCardProps {
  notification: NotificationType;
}

export type { NotificationCardProps };
