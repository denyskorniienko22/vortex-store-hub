import { Payment02Icon } from "@hugeicons/core-free-icons";
import { HugeiconsIcon } from "@hugeicons/react";

import { Button } from "@/components/ui/button";
import { Spinner } from "@/components/ui/spinner";
import { cn } from "@/lib/utils";
import { formatPrice } from "@/utils/formatPrice";

interface ICheckoutPaymentPanelProps {
  totalAmount: number;
  isValid: boolean;
  isCreatingOrder: boolean;
}

const CheckoutPaymentPanel = ({
  totalAmount,
  isValid,
  isCreatingOrder,
}: ICheckoutPaymentPanelProps) => {
  return (
    <div className={cn("rounded-md", "bg-slate-100/70", "p-4")}>
      <div
        className={cn(
          "flex items-center justify-between",
          "text-base font-semibold",
          "pb-3 mb-1",
        )}
      >
        <h3 className="flex items-center gap-2">
          <HugeiconsIcon icon={Payment02Icon} size={24} className="mb-0.5" />
          To be paid:
        </h3>
        <p>{formatPrice(totalAmount)}</p>
      </div>
      <Button
        form="checkout-form"
        type="submit"
        disabled={!isValid || isCreatingOrder}
        className={cn(
          "w-full h-12",
          "text-base",
          "cursor-pointer",
          isCreatingOrder && "pointer-events-none",
        )}
      >
        {isCreatingOrder ? <Spinner /> : "Make an order"}
      </Button>
    </div>
  );
};

export default CheckoutPaymentPanel;
