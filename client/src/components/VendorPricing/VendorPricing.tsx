import "./VendorPricing.css";

type VendorIds = string[];
type VendorId = { id: string };

type VendorBase = {
  orgPrice: string;
  salePrice: string;
  updated: string;
};

type Vendor = VendorBase & VendorId;
type Vendors = Vendor[];

function VendorPricing({ price }: { price: string }) {
  const vendorBase = {
    orgPrice: price,
    salePrice: price,
    updated: "03/21/25",
  };
  const vendorIds: VendorIds = [
    "REI",
    "Mountain Hight Outfitters",
    "Backcountry",
    "Bass Pro",
    "Hight Country Outfitters",
    "Adventure Outdoors",
    "Summit Hut",
    "Cabela's",
  ];

  const vendors: Vendors = vendorIds.map((vendorId: string) => ({
    ...vendorBase,
    id: vendorId,
  }));

  return (
    <div className="vendor-pricing">
      <table>
        <thead>
          <tr>
            <th>Vendor</th>
            <th>Org. Price</th>
            <th>Sale Price</th>
            <th>Updated</th>
          </tr>
        </thead>
        <tbody>
          {vendors &&
            vendors.map((vendor) => <VendorRow key={vendor.id} {...vendor} />)}
        </tbody>
      </table>
    </div>
  );
}

function VendorRow({ id, orgPrice, salePrice, updated }: Vendor) {
  return (
    <tr>
      <td>{id}</td>
      <td>{orgPrice}</td>
      <td>{salePrice}</td>
      <td>{updated}</td>
    </tr>
  );
}

export default VendorPricing;
