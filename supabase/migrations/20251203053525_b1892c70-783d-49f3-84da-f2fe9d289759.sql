-- Create products table for perfume products
CREATE TABLE public.products (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  name TEXT NOT NULL,
  description TEXT NOT NULL,
  price DECIMAL(10,2) NOT NULL,
  sizes TEXT[] NOT NULL DEFAULT '{"50ml", "100ml"}',
  images TEXT[] NOT NULL DEFAULT '{}',
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
  updated_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Create reviews table
CREATE TABLE public.reviews (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  product_id UUID NOT NULL REFERENCES public.products(id) ON DELETE CASCADE,
  username TEXT NOT NULL,
  rating INTEGER NOT NULL CHECK (rating >= 1 AND rating <= 5),
  comment TEXT NOT NULL,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Enable RLS
ALTER TABLE public.products ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.reviews ENABLE ROW LEVEL SECURITY;

-- Products are publicly readable (no auth needed for browsing)
CREATE POLICY "Products are viewable by everyone" 
ON public.products 
FOR SELECT 
USING (true);

-- Reviews are publicly readable
CREATE POLICY "Reviews are viewable by everyone" 
ON public.reviews 
FOR SELECT 
USING (true);

-- Anyone can add reviews (guest reviews allowed)
CREATE POLICY "Anyone can add reviews" 
ON public.reviews 
FOR INSERT 
WITH CHECK (true);

-- Create function to update timestamps
CREATE OR REPLACE FUNCTION public.update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
  NEW.updated_at = now();
  RETURN NEW;
END;
$$ LANGUAGE plpgsql SET search_path = public;

-- Create trigger for automatic timestamp updates
CREATE TRIGGER update_products_updated_at
BEFORE UPDATE ON public.products
FOR EACH ROW
EXECUTE FUNCTION public.update_updated_at_column();

-- Insert sample perfume products
INSERT INTO public.products (name, description, price, sizes, images) VALUES
(
  'Noir Élégance',
  'A captivating blend of dark amber, vanilla orchid, and smoky vetiver. This mysterious fragrance opens with bergamot and black pepper, evolving into a heart of jasmine and oud. Perfect for evening occasions and those who appreciate depth and complexity.',
  185.00,
  ARRAY['30ml', '50ml', '100ml'],
  ARRAY['https://images.unsplash.com/photo-1541643600914-78b084683601?w=800', 'https://images.unsplash.com/photo-1594035910387-fea47794261f?w=800']
),
(
  'Rose Mystique',
  'An enchanting floral symphony featuring Bulgarian rose, peony, and pink pepper. The base notes of sandalwood and musk create a lasting impression. Ideal for romantic evenings and special celebrations.',
  220.00,
  ARRAY['50ml', '100ml'],
  ARRAY['https://images.unsplash.com/photo-1588405748880-12d1d2a59f75?w=800', 'https://images.unsplash.com/photo-1592945403244-b3fbafd7f539?w=800']
),
(
  'Ocean Breeze',
  'A fresh aquatic fragrance inspired by Mediterranean coastlines. Notes of sea salt, citrus, and marine accord blend with white tea and driftwood. Perfect for daytime wear and summer adventures.',
  145.00,
  ARRAY['50ml', '100ml', '150ml'],
  ARRAY['https://images.unsplash.com/photo-1595425970377-c9703cf48b6d?w=800', 'https://images.unsplash.com/photo-1619994403073-2cec844b8e63?w=800']
),
(
  'Golden Oud',
  'A luxurious oriental masterpiece featuring rare oud wood, saffron, and rose absolute. Enriched with amber and leather notes for an opulent finish. The ultimate statement of sophistication.',
  350.00,
  ARRAY['30ml', '50ml', '100ml'],
  ARRAY['https://images.unsplash.com/photo-1557170334-a9632e77c6e4?w=800', 'https://images.unsplash.com/photo-1608528577891-eb055944f2e7?w=800']
),
(
  'Velvet Iris',
  'A powdery floral fragrance centered around Italian iris, violet leaf, and orris root. Accented with suede and white musk for an elegant, sophisticated character. Timeless and refined.',
  195.00,
  ARRAY['50ml', '100ml'],
  ARRAY['https://images.unsplash.com/photo-1590736969955-71cc94801759?w=800', 'https://images.unsplash.com/photo-1594035910387-fea47794261f?w=800']
);

-- Insert sample reviews
INSERT INTO public.reviews (product_id, username, rating, comment) 
SELECT 
  p.id,
  'Emma S.',
  5,
  'Absolutely stunning fragrance! The longevity is incredible and I receive compliments every time I wear it.'
FROM public.products p WHERE p.name = 'Noir Élégance';

INSERT INTO public.reviews (product_id, username, rating, comment) 
SELECT 
  p.id,
  'Michael R.',
  4,
  'Beautiful scent with great projection. A bit strong for summer but perfect for fall and winter.'
FROM public.products p WHERE p.name = 'Noir Élégance';

INSERT INTO public.reviews (product_id, username, rating, comment) 
SELECT 
  p.id,
  'Sophie L.',
  5,
  'The most romantic perfume I have ever owned. My signature scent now!'
FROM public.products p WHERE p.name = 'Rose Mystique';

INSERT INTO public.reviews (product_id, username, rating, comment) 
SELECT 
  p.id,
  'David K.',
  5,
  'Worth every penny. The quality of ingredients is evident from the first spray.'
FROM public.products p WHERE p.name = 'Golden Oud';