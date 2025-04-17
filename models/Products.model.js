import mongoose from 'mongoose';

const linkSchema = new mongoose.Schema({
  topic: String,
  href: String,
  type: String,
});

const productSchema = new mongoose.Schema({
  description: { 
    type: String, 
    required: true },
  category: { 
    type: String 
  },
  subCategory: { 
    type: String 
  },
  ingramPartNumber: { 
    type: String, 
    unique: true 
  }, // clave única
  vendorPartNumber: { 
    type: String 
  },
  upcCode: { 
    type: String 
  },
  vendorName: { 
    type: String 
  },
  endUserRequired: { 
    type: Boolean 
  },
  hasDiscounts: { 
    type: Boolean 
  },
  discontinued: { 
    type: Boolean 
  },
  newProduct: { 
    type: Boolean 
  },
  directShip: { 
    type: Boolean 
  },
  hasWarranty: { 
    type: Boolean 
  },
  replacementSku: { 
    type: String, default: '' 
  },
  authorizedToPurchase: { 
    type: Boolean 
  },
  extraDescription: { 
    type: String 
  },
  links: [linkSchema],
  lastUpdated: { type: Date, default: Date.now }, // útil para saber cuándo se sincronizó
});

export default mongoose.model('Product', productSchema);
