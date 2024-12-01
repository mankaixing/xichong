'use client'

import Link from 'next/link'
import Image from 'next/image'
import { Home, ShoppingCart, Users, MapPin, Heart, MessageCircle, Send, Bookmark, MoreHorizontal } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { Card } from '@/components/ui/card'

const posts = [
  {
    id: 1,
    user: {
      name: "月夜漫步",
      avatar: "https://i.pravatar.cc/150?img=1"
    },
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/2.jpg-ik3WbCRtunuQtlXNGhIq6arF4VEQ5U.jpeg",
    likes: 328,
    caption: "今晚的月色真美 🌕 西涌的夜空总是能带给我惊喜，超级月亮照亮了整片海滩 #西涌夜空 #超级月亮 #天文奇观",
    comments: 45,
    time: "2小时前"
  },
  {
    id: 2,
    user: {
      name: "沙滩记忆",
      avatar: "https://i.pravatar.cc/150?img=2"
    },
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/3.jpg-hUsKETqPQIvXTwqE4jRLEZKqzdpNpN.jpeg",
    likes: 256,
    caption: "阳光、沙滩、海浪，还有这些可爱的茅草伞，西涌的夏日时光总是那么惬意 ☀️ #西涌沙滩 #夏日时光 #海边度假",
    comments: 32,
    time: "3小时前"
  },
  {
    id: 3,
    user: {
      name: "夜游达人",
      avatar: "https://i.pravatar.cc/150?img=3"
    },
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/4.jpg-7DfUnvN3wdfrFrdGhYK9uyCe354OLj.jpeg",
    likes: 198,
    caption: "夜晚的西涌别有一番风味，海边的茅草亭在夜色中格外温馨 🌊 #西涌夜景 #海边夜色 #度假生活",
    comments: 28,
    time: "4小时前"
  },
  {
    id: 4,
    user: {
      name: "音乐青年",
      avatar: "https://i.pravatar.cc/150?img=4"
    },
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/5.jpg-xgiJkzi80SiWlFYwvtlmfossEk455m.jpeg",
    likes: 421,
    caption: "繁星探索计划音乐节第一天！在星空下唱歌的感觉真的很奇妙 🎸 #繁星探索计划 #西涌音乐节 #星空音乐会",
    comments: 67,
    time: "5小时前"
  },
  {
    id: 5,
    user: {
      name: "浪漫印记",
      avatar: "https://i.pravatar.cc/150?img=5"
    },
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/1.jpg-H5eBnQ8CfiVkNUrWxZUKdYeS84eZok.jpeg",
    likes: 289,
    caption: "在西涌留下我们的印记❤️ 这里承载了太多美好的回忆 #西涌印记 #爱的记号 #美好回忆",
    comments: 42,
    time: "6小时前"
  }
]

export default function SocialPage() {
  return (
    <div className="bg-gray-50 min-h-screen max-w-md mx-auto relative pb-16">
      {/* Header */}
      <header className="bg-white p-4 sticky top-0 z-10 shadow-sm">
        <h1 className="text-xl font-bold text-center">社交空间</h1>
      </header>

      {/* Stories */}
      <div className="bg-white p-4 mb-2">
        <div className="flex space-x-4 overflow-x-auto">
          {posts.map((post) => (
            <div key={post.id} className="flex flex-col items-center flex-shrink-0">
              <div className="w-16 h-16 rounded-full ring-2 ring-blue-500 p-1">
                <Avatar className="w-full h-full">
                  <AvatarImage src={post.user.avatar} alt={post.user.name} />
                  <AvatarFallback>{post.user.name[0]}</AvatarFallback>
                </Avatar>
              </div>
              <span className="text-xs mt-1 w-16 truncate text-center">{post.user.name}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Posts */}
      <div className="space-y-4">
        {posts.map((post) => (
          <Card key={post.id} className="bg-white">
            {/* Post Header */}
            <div className="flex items-center justify-between p-4">
              <div className="flex items-center gap-2">
                <Avatar className="h-8 w-8">
                  <AvatarImage src={post.user.avatar} alt={post.user.name} />
                  <AvatarFallback>{post.user.name[0]}</AvatarFallback>
                </Avatar>
                <span className="font-semibold">{post.user.name}</span>
              </div>
              <Button variant="ghost" size="icon">
                <MoreHorizontal className="h-5 w-5" />
              </Button>
            </div>

            {/* Post Image */}
            <div className="relative aspect-square">
              <Image
                src={post.image}
                alt="Post image"
                fill
                className="object-cover"
              />
            </div>

            {/* Post Actions */}
            <div className="p-4">
              <div className="flex justify-between mb-2">
                <div className="flex space-x-4">
                  <Button variant="ghost" size="icon">
                    <Heart className="h-6 w-6" />
                  </Button>
                  <Button variant="ghost" size="icon">
                    <MessageCircle className="h-6 w-6" />
                  </Button>
                  <Button variant="ghost" size="icon">
                    <Send className="h-6 w-6" />
                  </Button>
                </div>
                <Button variant="ghost" size="icon">
                  <Bookmark className="h-6 w-6" />
                </Button>
              </div>
              <p className="font-semibold">{post.likes} 赞</p>
              <p className="mt-1">
                <span className="font-semibold">{post.user.name}</span>{' '}
                {post.caption}
              </p>
              <p className="text-gray-500 text-sm mt-1">
                查看全部 {post.comments} 条评论
              </p>
              <p className="text-gray-400 text-xs mt-1">{post.time}</p>
            </div>
          </Card>
        ))}
      </div>

      {/* Bottom Navigation */}
      <nav className="fixed bottom-0 left-0 right-0 bg-white shadow-md max-w-md mx-auto">
        <div className="flex justify-around p-2">
          <Link href="/" className="flex flex-col items-center text-gray-500">
            <Home className="w-6 h-6" />
            <span className="text-[10px] mt-1">我的首页</span>
          </Link>
          <Link href="/shop" className="flex flex-col items-center text-gray-500">
            <ShoppingCart className="w-6 h-6" />
            <span className="text-[10px] mt-1">购物商城</span>
          </Link>
          <Link href="/social" className="flex flex-col items-center text-blue-500">
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
