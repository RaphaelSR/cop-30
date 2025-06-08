import React from "react";
import {
  Modal,
  ModalProps,
  Stack,
  Divider,
  Group,
  Button
} from "@mantine/core";

export interface BaseModalProps
  extends Omit<ModalProps, "opened" | "onClose" | "children"> {
  isOpen: boolean;
  onClose: () => void;
  children: React.ReactNode;
  showFooter?: boolean;
  footerActions?: React.ReactNode;
  primaryAction?: {
    label: string;
    onClick: () => void;
    icon?: React.ReactNode;
    variant?: "filled" | "outline" | "light";
  };
  secondaryAction?: {
    label: string;
    onClick: () => void;
    variant?: "filled" | "outline" | "light";
  };
}

/**
 * Component base para modais, seguindo princípio DRY
 * Centraliza configurações comuns de modais
 * Aplica princípio Open/Closed - extensível para diferentes tipos de modais
 */
export const BaseModal: React.FC<BaseModalProps> = ({
  isOpen,
  onClose,
  children,
  showFooter = true,
  footerActions,
  primaryAction,
  secondaryAction,
  size = "lg",
  centered = true,
  ...rest
}) => {
  return (
    <Modal
      opened={isOpen}
      onClose={onClose}
      size={size}
      centered={centered}
      {...rest}
    >
      <Stack gap="md">
        {children}

        {showFooter && (
          <>
            <Divider />
            {footerActions || (
              <Group justify={secondaryAction ? "space-between" : "center"}>
                {secondaryAction && (
                  <Button
                    variant={secondaryAction.variant || "outline"}
                    onClick={secondaryAction.onClick}
                    style={{ flex: 1 }}
                  >
                    {secondaryAction.label}
                  </Button>
                )}
                {primaryAction && (
                  <Button
                    variant={primaryAction.variant || "filled"}
                    leftSection={primaryAction.icon}
                    onClick={primaryAction.onClick}
                    style={{ flex: 1 }}
                  >
                    {primaryAction.label}
                  </Button>
                )}
              </Group>
            )}
          </>
        )}
      </Stack>
    </Modal>
  );
};
