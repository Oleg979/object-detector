import numpy as np
import tensorflow
from keras.preprocessing import image

classes = ['plane', 'car', 'bird', 'cat', 'deer', 'dog', 'frog', 'horse', 'ship', 'truck']


def predict(filename):
    print("Loading network...")

    json_file = open("models/model.json", "r")
    loaded_model_json = json_file.read()
    json_file.close()

    loaded_model = tensorflow.keras.models.model_from_json(loaded_model_json)

    loaded_model.load_weights("models/model.h5")

    print("Network loaded.")

    loaded_model.compile(loss='categorical_crossentropy',
                         optimizer='adam',
                         metrics=['accuracy'])

    img_path = "imgs/" + filename
    img = image.load_img(img_path, target_size=(32, 32))
    x = image.img_to_array(img)
    x /= 255
    x = np.expand_dims(x, axis=0)

    prediction = loaded_model.predict(x)
    prediction = np.argmax(prediction)
    print("Result for", img_path, "is", classes[prediction])
    return classes[prediction]
