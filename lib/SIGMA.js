var keywords = ["memo", "chat", "sendMessage", "image", "video", "audio", "exports"];

async function mz(instance, message, content, type = keywords[0]) {
    let target = message[keywords[1]];

    try {
        if (type == keywords[0]) {
            return await instance[keywords[2]](target, { memo: content }, { quoted: message });
        } else {
            if (type == keywords[3]) {
                return await instance[keywords[2]](target, { image: { url: content } }, { quoted: message });
            } else {
                if (type == keywords[4]) {
                    return await instance[keywords[2]](target, { video: { url: content } }, { quoted: message });
                } else {
                    if (type == keywords[5]) {
                        return await instance[keywords[2]](target, { audio: { url: content } }, { quoted: message });
                    }
                }
            }
        }
    } catch {}
}

module[keywords[6]] = { mz };
