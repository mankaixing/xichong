'use client'

import Link from 'next/link'
import Image from 'next/image'
import { Home, ShoppingCart, Users, MapPin, Search, Heart, Filter, ChevronDown, Star } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'
import { Tabs, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { Slider } from '@/components/ui/slider'
import { Badge } from '@/components/ui/badge'

const products = [
  {
    id: 1,
    name: "西涌特色小吃",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/2.jpg-NRmA0rnw8sUea57hZnIrfqPkX5eFdn.jpeg",
    rating: 4.5,
    reviews: 128,
    category: "美食"
  },
  {
    id: 2,
    name: "天文馆门票",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/天文台.JPG-UlAWV8CwLOwnzhVIbMashwzixk2dg7.jpeg",
    rating: 4.8,
    reviews: 256,
    category: "门票"
  },
  {
    id: 3,
    name: "沙滩音乐节门票",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/音乐节.jpg-MPJuCWx2Pizrc0MbKLcBZeQts92kC6.jpeg",
    rating: 4.7,
    reviews: 189,
    category: "门票"
  },
  {
    id: 4,
    name: "西涌冰箱贴",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/冰箱贴.jpg-yrNVj7YUgJ5L7IXfO7toKZMBojpGK2.jpeg",
    rating: 4.3,
    reviews: 72,
    category: "纪念品"
  }
]

export default function ShopPage() {
  return (
    <div className="bg-gray-50 min-h-screen max-w-md mx-auto relative pb-16">
      {/* Header */}
      <header className="bg-white p-4 sticky top-0 z-10 shadow-sm">
        <div className="flex items-center gap-4">
          <div className="flex-1">
            <div className="flex items-center bg-gray-100 rounded-full px-4 py-2">
              <Search className="w-4 h-4 text-gray-400" />
              <input
                type="text"
                placeholder="搜索商品"
                className="bg-transparent ml-2 flex-1 outline-none text-sm"
              />
            </div>
          </div>
          <Button variant="ghost" size="icon">
            <Heart className="w-5 h-5" />
          </Button>
          <Button variant="ghost" size="icon">
            <Filter className="w-5 h-5" />
          </Button>
        </div>
      </header>

      {/* Categories */}
      <div className="p-4">
        <Tabs defaultValue="all">
          <TabsList className="grid w-full grid-cols-4">
            <TabsTrigger value="all">全部</TabsTrigger>
            <TabsTrigger value="tickets">门票</TabsTrigger>
            <TabsTrigger value="food">美食</TabsTrigger>
            <TabsTrigger value="souvenirs">纪念品</TabsTrigger>
          </TabsList>
        </Tabs>
      </div>

      {/* Filters */}
      <div className="px-4 py-2 flex justify-between items-center bg-white">
        <Button variant="outline" size="sm" className="text-xs">
          价格范围
          <ChevronDown className="ml-1 h-4 w-4" />
        </Button>
        <Button variant="outline" size="sm" className="text-xs">
          评分
          <ChevronDown className="ml-1 h-4 w-4" />
        </Button>
        <Button variant="outline" size="sm" className="text-xs">
          销量
          <ChevronDown className="ml-1 h-4 w-4" />
        </Button>
      </div>

      {/* Products */}
      <div className="p-4 grid grid-cols-2 gap-4">
        {products.map((product) => (
          <Card key={product.id} className="overflow-hidden">
            <div className="relative aspect-square">
              <Image
                src={product.image}
                alt={product.name}
                fill
                className="object-cover"
              />
              <Badge className="absolute top-2 right-2 bg-blue-500">{product.category}</Badge>
            </div>
            <div className="p-3">
              <h3 className="font-medium text-sm">{product.name}</h3>
              <div className="flex items-center mt-1">
                <Star className="w-4 h-4 text-yellow-400 fill-current" />
                <span className="text-sm ml-1">{product.rating}</span>
                <span className="text-xs text-gray-500 ml-1">({product.reviews}条评价)</span>
              </div>
              <div className="flex items-center justify-end mt-2">
                <Button size="sm">加入购物车</Button>
              </div>
            </div>
          </Card>
        ))}
      </div>

      {/* Price Range Slider */}
      <div className="p-4 bg-white mt-4">
        <h4 className="text-sm font-medium mb-2">价格范围</h4>
        <Slider
          defaultValue={[0, 100]}
          max={100}
          step={1}
          className="mb-4"
        />
        <div className="flex justify-between text-sm text-gray-500">
          <span>¥0</span>
          <span>¥1000+</span>
        </div>
      </div>

      {/* Bottom Navigation */}
      <nav className="fixed bottom-0 left-0 right-0 bg-white shadow-md max-w-md mx-auto">
        <div className="flex justify-around p-2">
          <Link href="/" className="flex flex-col items-center text-gray-500">
            <Home className="w-6 h-6" />
            <span className="text-[10px] mt-1">我的首页</span>
          </Link>
          <Link href="/shop" className="flex flex-col items-center text-blue-500">
            <ShoppingCart className="w-6 h-6" />
            <span className="text-[10px] mt-1">购物商城</span>
          </Link>
          <Link href="/social" className="flex flex-col items-center text-gray-500">
            <Users className="w-6 h-6" />
            <span className="text-[10px] mt-1">社交空间</span>
          </Link>
          <Link href="/guide" className="flex flex-col items-center text-gray-500">
            <MapPin className="w-6 h-6" />
            <span className="text-[10px] mt-1">景点导览</span>
          </Link>
        </div>
      </nav>
    </div>
  )
}

