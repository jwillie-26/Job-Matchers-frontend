import React from 'react'

function CustomerCards() {
  return (
    <div>
        <div>
            <h1 className='flex justify-center font-semibold mt-20 text-3xl'>Our Customers</h1>
            <p className='justify-center flex mt-5 text-gray-500'>Our customers are consistently impressed with our service and have formed loyal relationships with us</p>
        </div>
        <div className='flex gap-16 justify-center items-center mt-14 mb-28'>
            <img src='https://www.sap.com/dam/application/shared/logos/sap-logo-svg.svg/sap-logo-svg.svg'
            className='w-28'
            />
            {/*<img src='https://neojb.brickthemes.com/wp-content/uploads/2018/08/logo_02.png' className='w-40'/>*/}
            <img src='https://www2.deloitte.com/content/dam/assets/logos/deloitte.svg' className='w-40 bg-black'/>
            <img src='https://www.nasa.gov/sites/all/themes/custom/nasatwo/images/nasa-logo.svg' className='w-28'/>
            <img src='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAQIAAADECAMAAABDV99/AAAA5FBMVEX///8AAADYVgStGwLzvibjchzbThjunDTCIwPBQwPojRTmaaLROQ3zvIenAADq6ur15+bnhCm3RDn5+fnKysrXUQHtpR3zvR/1yFjg4OCIiIivHwLDw8PaYBmxJA777OfyuwD0xCfdWRnWQxPcUi/ZPABlZWW+AACRkZHlfzfibAv538i5ubnodajkXJv88fbFTxaxMCPwqFTtlBPOIAAuLi741rn0v415eXmrq6sgICBdXV08PDxLS0udnZ3j4+Nvb28TExNRUVHpkETmfRL76932zlrcUC66UUjt0s80NDRBQUETyRkJAAAHIUlEQVR4nO2ca2PbNBSG5Q0GDJgH9gY22bh0hADhUkYhzj3hnv7//0OTWI50zpFkt3bSdu/z0bItnceydCSnVeoO8Ms7jXh96vZ2ABRAARQoKFBQoKBAQYGCgiv++KgRf/6m+evULW+Nb99uxHcfar4/dctbAwqgAAoUFCgoUFCgoEBBgYICBQUKChQUqOYKfi+5RwpePHvQhGePNc+/kPn01BE15kUjA6aCt0Q+gQIogAIogAIogAIogAIogAIogAIogAIogAIogAIogAIouC8Kfn7PBxRAARRAARRAARRAARRAART4FDx4XfL4+Zcyf586osa8/MzHu4wzzaOvZF79YHDq6Grx8qEPruADzdkjmX/eNzh1dLVoXcErKIACKIACKIACKIACKIACKIACKIACKIACKIACKICCe6HgiZdvGL9WfC1z9qPBSUL69+NGnP/3tBmfB/nJ4CQKzp94ezblydOTtLJTzhsZgAIogAIogAIogAIouNcKHvqTfsY9VNAw5b+HBgAAAAAAAAAAAAAAAAAAAAC4w8TF6IplbB7LesOiGGZd1TiYRlHUHzpPSNL5aDaOtozXo6KrduzJBhfRnkpBUswizaxIvJen88GWPOZFw0FFbt0kWeq7r8TYsvwioix714ouTG9k1FJGkS1J7QPHxfEw31Qn8Vhi8x6mgoVZwCObr1j8e4qbx0tIhhO7ip2CxUSoPGUXZ0XfPoUrmJnFpoKJ78KBI/4t41bfh8X8ktVwpSAZCTVfMTcuTXqDGT+Dta5nFZsKbHlj86KhR8CW1jpCmq+k+8dq7qw719eOxEsFBXaxW4HZxYQeOLIfypxWcz1cYQ7HTgOHAcFVThXktRWM9PE4ovRT2puEsaNNBX56jRQsSLFHwbQ8nNFbbnb3pO+Gf4LqVEFZd00FdKTxKBg7DJS9gyrIVQtcU8GkgQI2rHkUbHYH2VuQu27VhoL+Hjr9b7mY9Cd8qrCiTLJ0WOTL9YVU6LTsUdDfHaTj0MRps82Zkd670BneQp4ZZtbVqadhfGr1KCjEK6qzmQJ3Vn1zBWaOK0qwwvQoYK+1V0EsXXFIAJiCNpNEnwIpDHsk8iiYNlGwew829PzD2adTIDqop0BK8dwKForN/VYGxO7Gs/WuFKiCB2LW7lYgGHAr2E19bAReeBS0aCCkQPEVq5meOhWIywyngu0B1uFWxtlUwUi1SEgB656HmcqjQHqB3Ap2OSdbHZphdpId1lUg9OgaCtjI5lOwj5WtTcwRjyhtd/8oqMA7vTsUCCOIW8E+N+bLI3vEM265ETanOlXAh3bjGcgKEh1crZXivkb+wtFHnY62HWXV/uZZUAF/rY3HIyvQWXdK3m9RQZnn8TRMetatjgGaYMUJa5vxGEQFWtrEt1+gX3096PHFSifhSoTds7YZ+bmo4LAZ7VagO4HeJ1B8G667mAMBcgVsqA4o0APX3LNrVLBDPP+4Rb2ATXD+F0G/ONvMxqVgYV6wZ3WnFPiHw75xlkuBjteY+rkCIz/ulrAC1kW9k6I+slv7ORTooW9p1MJ3bdtcCXkJK2Bt86ZGY/MkWYHONKyPB3ybqv3vRg6uocAoYwr09L5fS4kKqjzQqopsoUQtL4V8BBWwvMCzTFpUeeG+WFSg+4md5ZFTI9JJuiSogGWHnsVyrJ9lOVxICvRAQPbBhS2WY42HQQVsyWPm7kSBPndZFgsKdKiXpBr62SVq7btZkKACmrmaOxlUgRnrFq4gpqc4GxIdLT8MKqAnWD80kBVUYzlXoGdYvuLng8Gx5oSQAraItU4QFWyqYqZAbz4IfTy0U9sdIQV0+bK0SkUFhydMFFQ+J0qArxJIZSZtZs8BBSzG2F8cWfM5UaAHgpWSkLbdHa9CkrfZQQIKaN5KpjJJgVFMFOjVhmPjS/plg+QgvnqdLm4SM8GvwDsdKFGB+bVPGOIi9/dA8a1in9GzXe5xNAUsBLafx5o89V6/xZ34Sp+5o7GZRSZF2ZOOpYDl7ez5cQVWSicpmNJ7GKwkB9FqkG5bFafzdXXsOAr4TjifypgCu99KCnxjuZAiOuhSQbma6wlfxITJnCmwiwUF/l0AR7Z5XAXTy8tL+Udn0v49bTJ5U7iCUN5f10GXClzIn3BIi2ekmClYB9tT04GYXF2TmgYcOQpdLJNipqBGgxarcGuWrX5UrCVg4BrDbAVsDqcK6rXc8fvfQ2s6/qbIWXt+2mQrYMVEQd2Vn/gr8JJl+7uq/vBnec+7ILEU8PHSVrCs36p4IA3Jq1Enf49Aq4lVEmdp2uulaRZejsU9A16c9fzl3lsPB/1q8Tiejeb+h3EDuIJbRtL5V6Vbr6B7oAAKoEBBgYICBQUKChQUKChQUKCgQEGB8D23q/8QcDvJ5uLuzDQfvhldIV5L4Vf0j/bbz9Mh/+nMGzUmQAEUQIFS/wNQ7GoCqfA+2gAAAABJRU5ErkJggg==' className='w-28'/>
            <img src='https://img-prod-cms-rt-microsoft-com.akamaized.net/cms/api/am/imageFileData/RE1Mu3b?ver=5c31' className='w-40'/>
            
        </div>
    </div>
  )
}

export default CustomerCards