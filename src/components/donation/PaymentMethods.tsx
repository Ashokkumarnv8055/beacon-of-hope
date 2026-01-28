import { CreditCard, Smartphone, Building2, QrCode } from "lucide-react";

interface PaymentMethodsProps {
  upiId?: string;
  bankDetails?: {
    accountName: string;
    accountNumber: string;
    ifscCode: string;
    bankName: string;
  };
}

const defaultBankDetails = {
  accountName: "Vision Hope Trust",
  accountNumber: "XXXX XXXX XXXX 1234",
  ifscCode: "SBIN0012345",
  bankName: "State Bank of India",
};

const defaultUpiId = "visionhopetrust@upi";

export function PaymentMethods({
  upiId = defaultUpiId,
  bankDetails = defaultBankDetails,
}: PaymentMethodsProps) {
  // Generate UPI QR code URL using a QR code service
  const qrCodeUrl = `https://api.qrserver.com/v1/create-qr-code/?size=200x200&data=upi://pay?pa=${encodeURIComponent(upiId)}&pn=${encodeURIComponent("Vision Hope Trust")}&cu=INR`;

  return (
    <div className="space-y-6">
      {/* Payment Methods Header */}
      <div className="text-center mb-8">
        <h3 className="text-xl font-serif font-bold text-foreground mb-2">
          Ways to Donate
        </h3>
        <p className="text-muted-foreground">
          Choose your preferred payment method to support our mission
        </p>
      </div>

      {/* UPI QR Code Section */}
      <div className="accessible-card text-center">
        <div className="flex items-center justify-center gap-2 mb-4">
          <QrCode className="w-6 h-6 text-secondary" aria-hidden="true" />
          <h4 className="text-lg font-semibold text-foreground">Scan & Pay via UPI</h4>
        </div>
        <div className="bg-background p-4 rounded-xl inline-block shadow-inner border border-input">
          <img
            src={qrCodeUrl}
            alt={`UPI QR Code for ${upiId}. Scan with any UPI app to donate.`}
            className="w-48 h-48 mx-auto"
          />
        </div>
        <p className="mt-4 text-muted-foreground text-sm">
          Scan with Google Pay, PhonePe, Paytm, or any UPI app
        </p>
        <div className="mt-2 bg-muted p-3 rounded-lg">
          <p className="text-sm font-medium text-foreground">
            UPI ID: <span className="text-secondary select-all">{upiId}</span>
          </p>
        </div>
      </div>

      {/* Payment Options Grid */}
      <div className="grid sm:grid-cols-2 gap-4">
        {/* UPI Apps */}
        <div className="accessible-card">
          <div className="flex items-center gap-3 mb-3">
            <div className="w-10 h-10 bg-accent/20 rounded-lg flex items-center justify-center">
              <Smartphone className="w-5 h-5 text-accent" aria-hidden="true" />
            </div>
            <h4 className="font-semibold text-foreground">UPI Payment</h4>
          </div>
          <p className="text-sm text-muted-foreground mb-3">
            Send money directly using any UPI app
          </p>
          <ul className="text-sm space-y-1 text-foreground">
            <li>• Google Pay</li>
            <li>• PhonePe</li>
            <li>• Paytm</li>
            <li>• BHIM UPI</li>
          </ul>
        </div>

        {/* Card Payment */}
        <div className="accessible-card">
          <div className="flex items-center gap-3 mb-3">
            <div className="w-10 h-10 bg-secondary/20 rounded-lg flex items-center justify-center">
              <CreditCard className="w-5 h-5 text-secondary" aria-hidden="true" />
            </div>
            <h4 className="font-semibold text-foreground">Card Payment</h4>
          </div>
          <p className="text-sm text-muted-foreground mb-3">
            Secure online payment via debit/credit card
          </p>
          <ul className="text-sm space-y-1 text-foreground">
            <li>• Visa / Mastercard</li>
            <li>• RuPay</li>
            <li>• American Express</li>
            <li>• Net Banking</li>
          </ul>
          <p className="mt-3 text-xs text-muted-foreground italic">
            Card payments will be enabled soon
          </p>
        </div>
      </div>

      {/* Bank Transfer Details */}
      <div className="accessible-card">
        <div className="flex items-center gap-3 mb-4">
          <div className="w-10 h-10 bg-primary/20 rounded-lg flex items-center justify-center">
            <Building2 className="w-5 h-5 text-primary" aria-hidden="true" />
          </div>
          <h4 className="font-semibold text-foreground">Bank Transfer / NEFT / RTGS</h4>
        </div>
        <p className="text-sm text-muted-foreground mb-4">
          Transfer directly to our bank account
        </p>
        <div className="bg-muted rounded-lg p-4 space-y-3">
          <div className="flex justify-between items-center">
            <span className="text-sm text-muted-foreground">Account Name</span>
            <span className="font-medium text-foreground select-all">{bankDetails.accountName}</span>
          </div>
          <div className="flex justify-between items-center">
            <span className="text-sm text-muted-foreground">Account Number</span>
            <span className="font-medium text-foreground select-all">{bankDetails.accountNumber}</span>
          </div>
          <div className="flex justify-between items-center">
            <span className="text-sm text-muted-foreground">IFSC Code</span>
            <span className="font-medium text-foreground select-all">{bankDetails.ifscCode}</span>
          </div>
          <div className="flex justify-between items-center">
            <span className="text-sm text-muted-foreground">Bank Name</span>
            <span className="font-medium text-foreground">{bankDetails.bankName}</span>
          </div>
        </div>
        <p className="mt-3 text-xs text-muted-foreground">
          Please email your transaction details to{" "}
          <a href="mailto:donate@visionhopetrust.org" className="text-secondary hover:underline focus-ring rounded">
            donate@visionhopetrust.org
          </a>{" "}
          for receipt.
        </p>
      </div>

      {/* Tax Benefits Note */}
      <div className="bg-accent/10 border border-accent/30 rounded-lg p-4 text-center">
        <p className="text-sm text-foreground">
          <strong>Tax Benefits:</strong> All donations are eligible for tax exemption under Section 80G of the Income Tax Act.
          You will receive a donation receipt via email.
        </p>
      </div>
    </div>
  );
}
