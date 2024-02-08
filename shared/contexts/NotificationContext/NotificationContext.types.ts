interface NotificationContextProps {
  children: React.ReactNode;
}

interface NotificationProps {
  type?: string;
  title?: string;
  message?: string;
  image?: string;
}

export type { NotificationContextProps, NotificationProps };
