import { Form } from "react-router"

import ShowMessage from "@/components/ui/show-message"

import { messages } from "@/constants/messages"
import {
  DELIVERY_OPTIONS,
  PAYMENT_OPTIONS,
} from "@/features/checkout/constants"
import { useCheckout } from "@/features/checkout/hooks/use-checkout"
import { cn } from "@/lib/utils"
import { routes } from "@/root/routes"

import {
  CheckoutHeader,
  CheckoutOrderDetails,
  CheckoutPaymentPanel,
  ContactDetailsSection,
  RadioOptionsSection,
} from "./../features/checkout/components"

const CheckoutPage = () => {
  const {
    cartItems: checkoutItems,
    totalAmount,
    isCreatingOrder,
    register,
    control,
    onSubmit,
    formState: { errors, isValid },
  } = useCheckout()

  if (!checkoutItems) {
    return (
      <div className={cn("flex flex-col min-h-screen", "py-5")}>
        <div className="absolute top-1/2 left-1/2 -translate-1/2">
          <ShowMessage
            title={messages.ERROR.CHECKOUT.title}
            description={messages.ERROR.CHECKOUT.description}
            icon={messages.ERROR.CHECKOUT.icon}
            btnText={messages.ERROR.CHECKOUT.btnText}
            linkTo={routes.CART}
          />
        </div>
      </div>
    )
  }

  return (
    <div className={cn("flex flex-col min-h-screen", "py-5")}>
      <CheckoutHeader />
      <main
        className={cn(
          "container mx-auto",
          "grid grid-cols-5 gap-6",
          "px-6",
          "xs:flex xs:flex-col xs:max-w-full xs:px-3",
          "lg:grid lg:container lg:mx-auto",
        )}
      >
        <section className="col-span-3">
          <Form
            id="checkout-form"
            method="post"
            onSubmit={onSubmit}
            className="flex flex-col gap-8"
          >
            <ContactDetailsSection register={register} errors={errors} />
            <RadioOptionsSection
              control={control}
              controller_name="way_to_deliver"
              options={DELIVERY_OPTIONS}
            />
            <RadioOptionsSection
              control={control}
              controller_name="way_to_payment"
              options={PAYMENT_OPTIONS}
            />
          </Form>
        </section>
        <section className="col-span-2 flex flex-col gap-4">
          <CheckoutOrderDetails items={checkoutItems} />
          <CheckoutPaymentPanel
            totalAmount={totalAmount}
            isValid={isValid}
            isCreatingOrder={isCreatingOrder}
          />
        </section>
      </main>
    </div>
  )
}

export default CheckoutPage
