'use client'

import Link from 'next/link'
import Image from 'next/image'
import { Search, Home, ShoppingCart, Users, MapPin, Plus } from 'lucide-react'
import { Button } from '@/components/ui/button'

export default function HomePage() {
  return (
    <div className="bg-blue-100 min-h-screen max-w-md mx-auto relative pb-16 font-sans">
      {/* Header */}
      <header className="bg-[url('https://hebbkx1anhila5yf.public.blob.vercel-storage.com/背景11.jpg-U4LRvZhi66WM0PdSoHXJGRM9MpZVMu.jpeg')] bg-cover bg-center text-white p-6 text-center relative">
        <div className="absolute left-4 top-4 w-10 h-3 bg-black rounded-full"></div>
        <h1 className="text-3xl font-extrabold tracking-tight drop-shadow-lg">涌小创</h1>
        <p className="text-sm font-medium mt-2 bg-black bg-opacity-30 inline-block px-3 py-1 rounded-full">冬日上新</p>
        <div className="absolute right-4 top-4 flex space-x-1">
          <div className="w-4 h-4 bg-white rounded-full"></div>
          <div className="w-4 h-4 bg-white rounded-full"></div>
          <div className="w-4 h-4 bg-white rounded-full"></div>
        </div>
      </header>

      {/* Search Bar */}
      <div className="p-4">
        <div className="flex items-center bg-white rounded-full shadow-md">
          <Search className="w-5 h-5 text-gray-500 ml-3" />
          <input
            type="text"
            placeholder="请输入关键词"
            className="flex-1 p-2 rounded-full focus:outline-none"
          />
        </div>
      </div>

      {/* Navigation Tabs */}
      <div className="flex justify-around bg-white p-2 shadow-md text-sm font-medium">
        <button className="text-blue-500">涌小创</button>
        <button className="text-gray-500">景区购票</button>
        <button className="text-gray-500">天文展览</button>
        <button className="text-gray-500">更多</button>
      </div>

      {/* Featured Items */}
      <div className="p-4">
        <div className="flex justify-center space-x-4 overflow-x-auto py-2">
          {[
            {
              image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/冰箱贴.jpg-yrNVj7YUgJ5L7IXfO7toKZMBojpGK2.jpeg",
              alt: "冰箱贴"
            },
            {
              image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/1.jpg-tQiwD1bG9zaQ7W2Pv0Fn9XWnVB6lUI.jpeg",
              alt: "黑金设计"
            },
            {
              image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/2.jpg-NRmA0rnw8sUea57hZnIrfqPkX5eFdn.jpeg",
              alt: "美食"
            }
          ].map((item, index) => (
            <div key={index} className="flex-shrink-0 w-32 flex flex-col items-center">
              <div className="relative w-32 h-32 rounded-lg overflow-hidden border-2 border-gray-200">
                <Image
                  src={item.image}
                  alt={item.alt}
                  width={128}
                  height={128}
                  className="object-cover w-full h-full"
                  unoptimized
                />
                <Link href="/shop">
                  <Button size="icon" className="absolute bottom-2 right-2 h-6 w-6 rounded-full">
                    <Plus className="h-4 w-4" />
                  </Button>
                </Link>
              </div>
              <Button
                variant="outline"
                size="sm"
                className="mt-2 h-7 text-xs rounded-full"
              >
                选它
              </Button>
            </div>
          ))}
        </div>
      </div>

      {/* Activity Cards */}
      <div className="p-4 space-y-4">
        <div className="relative h-32 rounded-lg overflow-hidden">
          <Image
            src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/音乐节.jpg-MPJuCWx2Pizrc0MbKLcBZeQts92kC6.jpeg"
            alt="繁星探索计划"
            fill
            className="object-cover"
            unoptimized
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
          <div className="absolute bottom-0 left-0 p-4 text-white">
            <h3 className="font-bold text-lg">繁星探索计划</h3>
            <p className="text-sm mt-1">西涌沙滩音乐节</p>
          </div>
        </div>
        <div className="relative h-32 rounded-lg overflow-hidden">
          <Image
            src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/天文台.JPG-UlAWV8CwLOwnzhVIbMashwzixk2dg7.jpeg"
            alt="星海奥秘"
            fill
            className="object-cover"
            unoptimized
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
          <div className="absolute bottom-0 left-0 p-4 text-white">
            <h3 className="font-bold text-lg">星海奥秘</h3>
            <p className="text-sm mt-1">行星观星实践指南</p>
          </div>
        </div>
      </div>

      {/* Bottom Navigation */}
      <nav className="fixed bottom-0 left-0 right-0 bg-white shadow-md max-w-md mx-auto">
        <div className="flex justify-around p-2">
          <Link href="/" className="flex flex-col items-center text-blue-500">
            <Home className="w-6 h-6" />
            <span className="text-[10px] mt-1">我的首页</span>
          </Link>
          <Link href="/shop" className="flex flex-col items-center text-gray-500">
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

