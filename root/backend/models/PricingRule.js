import mongoose from "mongoose";

const PricingRuleSchema = new mongoose.Schema({
  type: String,
  value: Number,
  multiplier: Number,
});

export default mongoose.model("PricingRule", PricingRuleSchema);
